import { Icon } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    image: {
        height: 125,
        width: 125,
    },
    arrowsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    arrows: {
        width: 42,
        height: 42,
    },
});

export const CommanderDistribution: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} key="deadZone" source={require('@/../assets/crew/commander.png')} />
            <View style={styles.arrowsContainer}>
                <Icon style={styles.arrows} fill="#CC3300" name="diagonal-arrow-left-down-outline" />
                <Icon style={styles.arrows} fill="#CC3300" name="arrow-downward-outline" />
                <Icon style={styles.arrows} fill="#CC3300" name="diagonal-arrow-right-down-outline" />
            </View>
        </View>
    );
};
