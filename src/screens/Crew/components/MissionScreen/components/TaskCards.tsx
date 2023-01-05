import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    numberTaskCardsContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20,
    },
    numberTaskCards: {
        padding: 20,
        textAlign: 'center',
        fontSize: 60,
        minWidth: 90,
        backgroundColor: '#2251a6',
        borderRadius: 15,
        overflow: 'hidden',
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'white',
    },
});

interface TaskCardsProps {
    numberTaskCards: number;
}

export const TaskCards: React.FC<TaskCardsProps> = ({ numberTaskCards }) => {
    return (
        <View style={styles.numberTaskCardsContainer}>
            <Text style={styles.numberTaskCards}>{numberTaskCards}</Text>
        </View>
    );
};
