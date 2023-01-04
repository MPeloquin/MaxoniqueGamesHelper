import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '@/RootStack';
import { TaskTokens } from './components/TaskTokens';

const styles = StyleSheet.create({
    instructionsTitle: { fontSize: 30 },
    instructionsText: { fontSize: 20, paddingVertical: 10 },
    numberTaskCardsContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20,
    },
    numberTaskCards: {
        padding: 20,
        textAlign: 'center',
        fontSize: 60,
        width: 100,
        backgroundColor: '#3366ff',
        borderRadius: 10,
        overflow: 'hidden',
        color: 'white',
    },
});

type MissionScreenProps = NativeStackScreenProps<RootStackParamList, 'Mission'>;
export const MissionScreen: React.FC<MissionScreenProps> = ({
    route: {
        params: { mission },
    },
}) => {
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            {mission.numberTaskCards && (
                <View style={styles.numberTaskCardsContainer}>
                    <Text style={styles.numberTaskCards}>{mission.numberTaskCards}</Text>
                </View>
            )}
            {mission.instructions && (
                <>
                    <Text category="h2" style={styles.instructionsTitle}>
                        Instructions
                    </Text>
                    <Text style={styles.instructionsText}>{mission.instructions}</Text>
                </>
            )}
            {mission.taskTokens && <TaskTokens taskTokens={mission.taskTokens} />}
        </Layout>
    );
};
