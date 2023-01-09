import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { useWondersGameStore } from '@/screens/Wonders/components/WondersPlay/store';

const styles = StyleSheet.create({
    conflictContainer: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible',
    },
    conflict: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 14,
        zIndex: 2,
    },
    playerOne5Coins: {
        height: 32,
        width: 73,
        position: 'absolute',
        top: 62,
        zIndex: 2,
    },
    playerOne2Coins: {
        height: 30,
        width: 67,
        position: 'absolute',
        top: 64,
        left: 85,
        zIndex: 2,
    },
    playerTwo5Coins: {
        height: 32,
        width: 73,
        position: 'absolute',
        top: 67,
        right: -11,
        zIndex: 2,
    },
    playerTwo2Coins: {
        height: 30,
        width: 67,
        position: 'absolute',
        top: 68,
        right: 85,
        zIndex: 2,
    },
    board: {
        zIndex: 1,
        maxWidth: 100,
    },
});

const positionAdjustment: { [key in string]: number } = {
    '-9': 5.5,
    '-8': 4.5,
    '-7': 3.9,
    '-6': 3,
    '-5': 2.3,
    '-4': 1.7,
    '-3': 1.3,
    '-2': 0.8,
    '-1': 0.4,
    '0': 0,
    '1': 0,
    '2': 0,
    '3': -0.2,
    '4': -0.2,
    '5': 0,
    '6': 0,
    '7': 0.3,
    '8': 0.5,
    '9': 0.8,
};

export const ConflictComponent: React.FC = () => {
    const { militaryScore, players } = useWondersGameStore((state) => ({
        militaryScore: state.militaryScore,
        players: state.players,
    }));

    const position = militaryScore * 6.5 + 45 + positionAdjustment[String(militaryScore)];

    return (
        <View style={styles.conflictContainer}>
            {!players[0].hasLostFiveCoins && (
                <Image style={styles.playerOne5Coins} source={require('@/../assets/wonders/5.webp')} />
            )}
            {!players[0].hasLostTwoCoins && (
                <Image style={styles.playerOne2Coins} source={require('@/../assets/wonders/2.webp')} />
            )}
            {!players[1].hasLostFiveCoins && (
                <Image style={styles.playerTwo5Coins} source={require('@/../assets/wonders/5.webp')} />
            )}
            {!players[1].hasLostTwoCoins && (
                <Image style={styles.playerTwo2Coins} source={require('@/../assets/wonders/2.webp')} />
            )}
            <Image
                style={{ ...styles.conflict, left: `${position}%` }}
                source={require('@/../assets/wonders/conflict.webp')}
            />
            <ImageBackground
                source={require('@/../assets/wonders/board.webp')}
                style={{ width: '110%', height: '100%', marginLeft: '-7%' }}
            >
                <View />
            </ImageBackground>
        </View>
    );
};
