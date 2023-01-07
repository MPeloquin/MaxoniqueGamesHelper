import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text } from '@ui-kitten/components';
import { useWondersGameStore } from '../store';

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const MilitaryPoints: React.FC = () => {
    const { militaryScore, updateMilitaryScore } = useWondersGameStore((state) => ({
        updateMilitaryScore: state.updateMilitaryScore,
        militaryScore: state.militaryScore,
    }));

    return (
        <View style={styles.buttonsContainer}>
            <Button
                appearance="outline"
                onPress={() => updateMilitaryScore(-1)}
                accessoryLeft={<Icon name="arrowhead-left-outline" />}
            />
            <Text style={{ fontSize: 30, fontWeight: '900', padding: 20 }}> {militaryScore}</Text>
            <Button
                appearance="outline"
                onPress={() => updateMilitaryScore(1)}
                accessoryLeft={<Icon name="arrowhead-right-outline" />}
            />
        </View>
    );
};
