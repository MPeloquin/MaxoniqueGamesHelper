import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Platform } from 'react-native';
import { useWondersGameStore } from '@/screens/Wonders/components/WondersPlay/store';

const stylesiPhone = StyleSheet.create({
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
        width: '110%',
        height: '100%',
        marginLeft: '-7%',
    },
});

const stylesiPad = StyleSheet.create({
    conflictContainer: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible',
    },
    conflict: {
        height: 40 * 1.5,
        width: 40 * 1.5,
        position: 'absolute',
        top: 2,
        zIndex: 2,
    },
    playerOne5Coins: {
        height: 32 * 1.5,
        width: 73 * 1.5,
        position: 'absolute',
        top: 88,
        left: 15,
        zIndex: 2,
    },
    playerOne2Coins: {
        height: 30 * 1.5,
        width: 67 * 1.5,
        position: 'absolute',
        top: 92,
        left: 165,
        zIndex: 2,
    },
    playerTwo5Coins: {
        height: 32 * 1.8,
        width: 73 * 1.8,
        position: 'absolute',
        top: 95,
        right: 30,
        zIndex: 2,
    },
    playerTwo2Coins: {
        height: 30 * 1.5,
        width: 67 * 1.5,
        position: 'absolute',
        top: 100,
        right: 215,
        zIndex: 2,
    },
    board: {
        width: '110%',
        height: '100%',
        marginLeft: '-10%',
        marginBottom: '10%',
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

const positionAdjustmentiPad: { [key in string]: number } = {
    '-9': 7.6,
    '-8': 5.8,
    '-7': 4.5,
    '-6': 3.5,
    '-5': 2.5,
    '-4': 1.5,
    '-3': 1,
    '-2': 0,
    '-1': -1,
    '0': -1.5,
    '1': -2,
    '2': -2.7,
    '3': -3,
    '4': -3.2,
    '5': -3.7,
    '6': -4,
    '7': -4.2,
    '8': -4.5,
    '9': -4,
};

export const ConflictComponent: React.FC = () => {
    const isIpad = Platform.OS === 'ios' && Platform.isPad;
    const styles = isIpad ? stylesiPad : stylesiPhone;

    const { militaryScore, players } = useWondersGameStore((state) => ({
        militaryScore: state.militaryScore,
        players: state.players,
    }));

    const position =
        militaryScore * 6.5 +
        45 +
        (isIpad ? positionAdjustmentiPad[String(militaryScore)] : positionAdjustment[String(militaryScore)]);

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
                resizeMode="contain"
                source={require('@/../assets/wonders/board.webp')}
                style={styles.board}
            >
                <View />
            </ImageBackground>
        </View>
    );
};
