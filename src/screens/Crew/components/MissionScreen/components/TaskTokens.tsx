import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Mission } from '@/screens/Crew/types';
import { One, Two, Three, Four, Five, Last, Before1, Before2, Before3, Before4 } from './Tokens';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
});

export const TaskTokens: React.FC<{ taskTokens: Mission['taskTokens'] }> = ({ taskTokens }) => {
    if (!taskTokens) {
        return null;
    }

    const tokenComponents: JSX.Element[] = [];

    if (taskTokens.one) {
        tokenComponents.push(<One key="One" />);
    }

    if (taskTokens.two) {
        tokenComponents.push(<Two key="Two" />);
    }

    if (taskTokens.three) {
        tokenComponents.push(<Three key="Three" />);
    }

    if (taskTokens.four) {
        tokenComponents.push(<Four key="Four" />);
    }

    if (taskTokens.five) {
        tokenComponents.push(<Five key="Five" />);
    }

    if (taskTokens.last) {
        tokenComponents.push(<Last key="Last" />);
    }

    if (taskTokens.before1) {
        tokenComponents.push(<Before1 key="Before1" />);
    }

    if (taskTokens.before2) {
        tokenComponents.push(<Before2 key="Before2" />);
    }

    if (taskTokens.before3) {
        tokenComponents.push(<Before3 key="Before3" />);
    }

    if (taskTokens.before4) {
        tokenComponents.push(<Before4 key="Before4" />);
    }

    return <View style={styles.container}>{tokenComponents.map((item) => item)}</View>;
};
