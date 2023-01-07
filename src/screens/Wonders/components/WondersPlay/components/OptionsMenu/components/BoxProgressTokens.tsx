import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWondersGameStore, ProgressTokens, TokenStatus } from '@/screens/Wonders/components/WondersPlay/store';
import { ProgressTokenComponent } from '@/screens/Wonders/components/WondersPlay/components/ProgressTokenComponent';

const styles = StyleSheet.create({
    tokensContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
});

export const BoxProgressTokens: React.FC = () => {
    const { progressTokens } = useWondersGameStore((state) => ({
        progressTokens: state.progressTokens,
    }));

    return (
        <View style={styles.tokensContainer}>
            {Object.entries(progressTokens)
                .filter((progressTokens) => progressTokens[1] === TokenStatus.Box)
                .map((token) => {
                    return <ProgressTokenComponent key={token[0]} token={token[0] as ProgressTokens} />;
                })}
        </View>
    );
};
