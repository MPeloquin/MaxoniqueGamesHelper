import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';

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
        alignItems: 'center',
        marginLeft: 100,
    },
    arrows: {
        width: 62,
        height: 62,
    },
    textNumber: {
        fontSize: 40,
        padding: 10,
        backgroundColor: '#3366ff',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
        overflow: 'hidden',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'white',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInstructions: {
        fontSize: 20,
    },
});

interface CommanderDecisionProps {
    tasks: number;
}

export const CommanderDecision: React.FC<CommanderDecisionProps> = ({ tasks }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} key="deadZone" source={require('@/../assets/crew/commander.png')} />
            <View style={styles.arrowsContainer}>
                <Icon style={styles.arrows} fill="#CC3300" name="arrow-downward-outline" />
                <View style={styles.textContainer}>
                    <Text style={styles.textNumber}>{tasks}</Text>
                    <Text style={styles.textInstructions}>Face down</Text>
                </View>
            </View>
        </View>
    );
};
