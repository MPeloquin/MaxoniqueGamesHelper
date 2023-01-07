import { Popover, Layout, Button, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ProgressTokens, useWondersGameStore } from '../store';

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
        height: 90,
        width: 90,
        marginHorizontal: 2,
    },
    iconSmall: {
        height: 70,
        width: 70,
        marginHorizontal: 2,
    },
    button: {
        marginHorizontal: 5,
    },
});

interface ProgressTokenComponentProps {
    token: ProgressTokens;
}

const sourceMap: { [key in ProgressTokens]: ImageSourcePropType } = {
    [ProgressTokens.Agriculture]: require('@/../assets/wonders/agriculture.webp'),
    [ProgressTokens.Architecture]: require('@/../assets/wonders/architecture.webp'),
    [ProgressTokens.Law]: require('@/../assets/wonders/law.webp'),
    [ProgressTokens.Masonry]: require('@/../assets/wonders/masonry.webp'),
    [ProgressTokens.Economy]: require('@/../assets/wonders/economy.webp'),
    [ProgressTokens.Mathematics]: require('@/../assets/wonders/mathematics.webp'),
    [ProgressTokens.Philosophy]: require('@/../assets/wonders/philosophy.webp'),
    [ProgressTokens.Urbanism]: require('@/../assets/wonders/urbanism.webp'),
    [ProgressTokens.Theology]: require('@/../assets/wonders/theology.webp'),
    [ProgressTokens.Strategy]: require('@/../assets/wonders/strategy.webp'),
};

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

export const ProgressPlayerTokenComponent: React.FC<ProgressTokenComponentProps> = ({ token }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const { returnTokenToBox, returnTokenToGame } = useWondersGameStore((state) => ({
        returnTokenToBox: state.returnTokenToBox,
        returnTokenToGame: state.returnTokenToGame,
    }));
    const renderToggleButton = () => (
        <TouchableOpacity onPress={() => setIsPopoverVisible(true)}>
            <Image style={styles.iconSmall} source={sourceMap[token]} />
        </TouchableOpacity>
    );

    const handleGameButtonPress = () => {
        setIsPopoverVisible(false);
        returnTokenToGame(token);
    };

    const handleBoxButtonPress = () => {
        setIsPopoverVisible(false);
        returnTokenToBox(token);
    };

    return (
        <Popover
            visible={isPopoverVisible}
            anchor={renderToggleButton}
            onBackdropPress={() => setIsPopoverVisible(false)}
        >
            <Layout style={styles.content}>
                <Text style={{ color: '#2E3A59' }}>Return token to</Text>
                <Button style={styles.button} onPress={() => handleGameButtonPress()}>
                    Game
                </Button>
                <Button style={styles.button} onPress={() => handleBoxButtonPress()}>
                    Box
                </Button>
            </Layout>
        </Popover>
    );
};

export const ProgressBoxTokenComponent: React.FC<ProgressTokenComponentProps> = ({ token }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const selectProgressToken = useWondersGameStore((state) => state.selectProgressToken);
    const renderToggleButton = () => (
        <TouchableOpacity onPress={() => setIsPopoverVisible(true)}>
            <Image style={styles.iconSmall} source={sourceMap[token]} />
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
