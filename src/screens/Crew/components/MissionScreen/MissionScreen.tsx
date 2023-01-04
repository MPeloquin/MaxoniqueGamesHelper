import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '@/RootStack';
import { TaskCards } from './components/TaskCards';
import { Disruption } from './components/Disruption';
import { TaskTokens } from './components/TaskTokens';
import { DeadZone } from './components/DeadZone';
import { CommanderDecision } from './components/CommanderDecision';
import { CommanderDistribution } from './components/CommanderDistribution';

const styles = StyleSheet.create({
    instructionsTitle: { fontSize: 30 },
    instructionsText: { fontSize: 20, paddingVertical: 10 },
});

type MissionScreenProps = NativeStackScreenProps<RootStackParamList, 'Mission'>;
export const MissionScreen: React.FC<MissionScreenProps> = ({
    route: {
        params: { mission },
    },
}) => {
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            {mission.numberTaskCards && <TaskCards numberTaskCards={mission.numberTaskCards} />}
            {mission.instructions && (
                <>
                    <Text category="h2" style={styles.instructionsTitle}>
                        Instructions
                    </Text>
                    <Text style={styles.instructionsText}>{mission.instructions}</Text>
                </>
            )}
            {mission.taskTokens && <TaskTokens taskTokens={mission.taskTokens} />}
            {mission.deadZone && <DeadZone />}
            {mission.disruption && <Disruption tricks={mission.disruption} />}
            {mission.commanderDecision && <CommanderDecision tasks={mission.commanderDecision} />}
            {mission.commanderDistribution && <CommanderDistribution />}
        </Layout>
    );
};
