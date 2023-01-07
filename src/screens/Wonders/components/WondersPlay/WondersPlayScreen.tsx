import React, { useEffect } from 'react';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useLockLandscape } from './hooks/useLockLandscape';
import { useWondersGameStore } from './store';
import { PlayerComponent } from './components/PlayerComponent';
import { MilitaryPoints } from './components/MilitaryPoints';
import { GameProgressTokens } from './components/GameProgressTokens';
import { OptionsMenu } from './components/OptionsMenu/OptionsMenu';

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
                    <GameProgressTokens />
                    <MilitaryPoints />
                </View>
                <PlayerComponent playerId={1} />
                <OptionsMenu />
            </SafeAreaView>
        </Layout>
    );
};
