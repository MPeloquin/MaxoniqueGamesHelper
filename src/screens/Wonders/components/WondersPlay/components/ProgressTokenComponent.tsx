import { Popover, Layout, Button } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ProgressTokens, useWondersGameStore } from '../store';

interface ProgressTokenComponentProps {
    token: ProgressTokens;
}

const sourceMap: { [key in ProgressTokens]: ImageSourcePropType } = {
    [ProgressTokens.Agriculture]: require('@/../assets/wonders/agriculture.png'),
    [ProgressTokens.Architecture]: require('@/../assets/wonders/architecture.png'),
    [ProgressTokens.Law]: require('@/../assets/wonders/law.png'),
    [ProgressTokens.Masonry]: require('@/../assets/wonders/masonry.png'),
    [ProgressTokens.Economy]: require('@/../assets/wonders/economy.png'),
    [ProgressTokens.Mathematics]: require('@/../assets/wonders/mathematics.png'),
    [ProgressTokens.Philosophy]: require('@/../assets/wonders/philosophy.png'),
    [ProgressTokens.Urbanism]: require('@/../assets/wonders/urbanism.png'),
    [ProgressTokens.Theology]: require('@/../assets/wonders/theology.png'),
    [ProgressTokens.Strategy]: require('@/../assets/wonders/strategy.png'),
};

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#C5CEE0',
        borderRadius: 20,
        marginTop: 5,
    },
    icon: {
        height: 75,
        width: 75,
        marginHorizontal: 5,
    },
    button: {
        marginHorizontal: 5,
    },
});

export const ProgressTokenComponent: React.FC<ProgressTokenComponentProps> = ({ token }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const selectProgressToken = useWondersGameStore((state) => state.selectProgressToken);
    const renderToggleButton = () => (
        <TouchableOpacity onPress={() => setIsPopoverVisible(true)}>
            <Image style={styles.icon} source={sourceMap[token]} />
        </TouchableOpacity>
    );

    const handleButtonPress = (index: number) => {
        setIsPopoverVisible(false);
        selectProgressToken(token, index);
    };

    return (
        <Popover
            visible={isPopoverVisible}
            anchor={renderToggleButton}
            onBackdropPress={() => setIsPopoverVisible(false)}
        >
            <Layout style={styles.content}>
                <Button style={styles.button} onPress={() => handleButtonPress(0)}>
                    Player 1
                </Button>
                <Button style={styles.button} onPress={() => handleButtonPress(1)}>
                    Player 2
                </Button>
            </Layout>
        </Popover>
    );
};
