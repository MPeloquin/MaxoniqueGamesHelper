import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Icon } from '@ui-kitten/components';
import { useWondersGameStore } from '../store';

interface PlayerComponentProps {
    playerId: number;
}

const styles = StyleSheet.create({
    buttons: {
        width: 20,
        marginHorizontal: 5,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
});

export const PlayerComponent: React.FC<PlayerComponentProps> = ({ playerId }) => {
    const { player, updatePlayerMoney } = useWondersGameStore((state) => ({
        player: state.players[playerId],
        updatePlayerMoney: state.updatePlayerMoney(playerId),
    }));

    return (
        <View>
            <Text category="h4">Player {player.id + 1}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{player.money} coins</Text>
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
            </View>
        </View>
    );
};
