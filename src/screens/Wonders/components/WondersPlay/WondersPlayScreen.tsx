import React, { useEffect } from 'react';
import { Layout, Button, Icon, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useLockLandscape } from './hooks/useLockLandscape';
import { useWondersGameStore, ProgressTokens } from './store';
import { PlayerComponent } from './components/PlayerComponent';
import { ProgressTokenComponent } from './components/ProgressTokenComponent';

export const WondersPlayScreen: React.FC = () => {
    useLockLandscape();
    const gameStore = useWondersGameStore();

    useEffect(() => {
        gameStore.initializeGame();
    }, [gameStore.initializeGame]);

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}
            >
                <PlayerComponent playerId={0} />
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {Object.entries(gameStore.progressTokens).map((token) => {
                            if (token[1]) {
                                return <ProgressTokenComponent key={token[0]} token={token[0] as ProgressTokens} />;
                            }
                            return null;
                        })}
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            appearance="outline"
                            onPress={() => gameStore.updateMilitaryScore(-1)}
                            accessoryLeft={<Icon name="arrowhead-left-outline" />}
                        />
                        <Text style={{ fontSize: 30, fontWeight: '900', padding: 20 }}> {gameStore.militaryScore}</Text>
                        <Button
                            appearance="outline"
                            onPress={() => gameStore.updateMilitaryScore(1)}
                            accessoryLeft={<Icon name="arrowhead-right-outline" />}
                        />
                    </View>
                </View>
                <PlayerComponent playerId={1} />
            </SafeAreaView>
        </Layout>
    );
};
