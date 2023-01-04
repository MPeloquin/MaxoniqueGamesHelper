import React from 'react';
import { View } from 'react-native';
import { Mission } from '@/screens/Crew/types';
import { One, Two, Three, Four, Five, Last, Before1, Before2, Before3, Before4 } from './Tokens';

export const TaskTokens: React.FC<{ taskTokens: Mission['taskTokens'] }> = ({ taskTokens }) => {
    if (!taskTokens) {
        return null;
    }

    const tokenComponents: JSX.Element[] = [];

    if (taskTokens.one) {
        tokenComponents.push(<One />);
    }

    if (taskTokens.two) {
        tokenComponents.push(<Two />);
    }

    if (taskTokens.three) {
        tokenComponents.push(<Three />);
    }

    if (taskTokens.four) {
        tokenComponents.push(<Four />);
    }

    if (taskTokens.five) {
        tokenComponents.push(<Five />);
    }

    if (taskTokens.last) {
        tokenComponents.push(<Last />);
    }

    if (taskTokens.before1) {
        tokenComponents.push(<Before1 />);
    }

    if (taskTokens.before2) {
        tokenComponents.push(<Before2 />);
    }

    if (taskTokens.before3) {
        tokenComponents.push(<Before3 />);
    }

    if (taskTokens.before4) {
        tokenComponents.push(<Before4 />);
    }

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
            }}
        >
            {tokenComponents.map((item) => item)}
        </View>
    );
};
