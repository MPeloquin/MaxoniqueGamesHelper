import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 125,
        width: 125,
        zIndex: 2,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 100,
        height: 125,
        overflow: 'hidden',
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginLeft: -30,
        zIndex: 1,
    },
    textNumber: {
        textAlign: 'center',
        color: 'red',
        fontSize: 80,
    },
});

export const DeadZone: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} key="deadZone" source={require('@/../assets/crew/communication.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.textNumber}>?</Text>
            </View>
        </View>
    );
};
