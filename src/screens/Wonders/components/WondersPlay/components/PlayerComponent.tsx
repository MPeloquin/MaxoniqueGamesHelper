import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Icon } from '@ui-kitten/components';
import { useWondersGameStore } from '../store';
import { ProgressPlayerTokenComponent } from './ProgressTokenComponent';

interface PlayerComponentProps {
    playerId: number;
}

const styles = StyleSheet.create({
    buttons: {
        width: 40,
        marginHorizontal: 5,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        height: 40,
    },
    tokensContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        maxWidth: 150,
        flexWrap: 'wrap',
    },
    debouncedContainer: {
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
let timeout: ReturnType<typeof setTimeout> | null = null;

export const PlayerComponent: React.FC<PlayerComponentProps> = ({ playerId }) => {
    const { player, updatePlayerMoney } = useWondersGameStore((state) => ({
        player: state.players[playerId],
        updatePlayerMoney: state.updatePlayerMoney(playerId),
    }));

    const [debouncedMoney, setDebouncedMoney] = useState(player.money);
    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            setDebouncedMoney(player.money);
        }, 2500);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [player.money]);

    return (
        <View>
            <Text category="h4">Player {player.id + 1}</Text>
            <Text style={{ minWidth: 120, fontWeight: 'bold', fontSize: 30 }}>{player.money} coins</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.buttons}
                    appearance="outline"
                    onPress={() => updatePlayerMoney(-1)}
                    status="danger"
                    accessoryLeft={<Icon name="minus-outline" />}
                />
                <Button
                    style={styles.buttons}
                    appearance="outline"
                    onPress={() => updatePlayerMoney(1)}
                    status="success"
                    accessoryLeft={<Icon name="plus-outline" />}
                />
                <TouchableOpacity style={styles.debouncedContainer} onPress={() => setDebouncedMoney(player.money)}>
                    <Text style={{ fontSize: 20, minWidth: 20 }}>
                        {debouncedMoney !== player.money ? player.money - debouncedMoney : ''}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tokensContainer}>
                {player.progressTokens.map((token) => {
                    return <ProgressPlayerTokenComponent key={token} token={token} />;
                })}
            </View>
        </View>
    );
};
