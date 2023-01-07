import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useWondersGameStore, ProgressTokens, TokenStatus } from '../store';
import { ProgressTokenComponent } from './ProgressTokenComponent';

const styles = StyleSheet.create({
    tokensContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const GameProgressTokens: React.FC = () => {
    const { progressTokens } = useWondersGameStore((state) => ({
        progressTokens: state.progressTokens,
    }));

    return (
        <View style={styles.tokensContainer}>
            {Object.entries(progressTokens).map((token) => {
                if (token[1] === TokenStatus.Game) {
                    return <ProgressTokenComponent key={token[0]} token={token[0] as ProgressTokens} />;
                }
                return null;
            })}
        </View>
    );
};
