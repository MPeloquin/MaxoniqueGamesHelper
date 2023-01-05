import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList, useRootNavigation } from '@/RootStack';
import { useMissionProgressStore } from '@/screens/Crew/store';
import { getMissionScreenTitle } from '@/screens/Crew/components/MissionScreen/getMissionScreenTitle';
import { TaskCards } from './components/TaskCards';
import { Disruption } from './components/Disruption';
import { TaskTokens } from './components/TaskTokens';
import { DeadZone } from './components/DeadZone';
import { CommanderDecision } from './components/CommanderDecision';
import { CommanderDistribution } from './components/CommanderDistribution';

const styles = StyleSheet.create({
    instructionsTitle: { fontSize: 30 },
    instructionsText: { fontSize: 20, paddingVertical: 10 },
    buttonsContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
});

type MissionScreenProps = NativeStackScreenProps<RootStackParamList, 'Mission'>;
export const MissionScreen: React.FC<MissionScreenProps> = ({
    route: {
        params: { mission },
    },
}) => {
    const { failMission, completeMission, progress, resetMission } = useMissionProgressStore();
    const navigation = useRootNavigation();

    useEffect(() => {
        navigation.setOptions({ title: getMissionScreenTitle({ ...mission, progress: progress[mission.id] }) });
    }, [progress, mission, navigation]);

    return (
        <Layout style={{ flex: 1, padding: 10, justifyContent: 'space-between' }}>
            <Button
                style={{ position: 'absolute', top: 10, right: 10, zIndex: 10000 }}
                status="warning"
                appearance="ghost"
                accessoryRight={<Icon name="refresh-outline" />}
                onPress={() => {
                    resetMission(mission.id);
                }}
            />

            <View>
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
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    status="danger"
                    appearance="ghost"
                    accessoryRight={<Icon name="close-outline" />}
                    onPress={() => {
                        failMission(mission.id);
                    }}
                >
                    Failure
                </Button>
                <Button
                    status="success"
                    appearance="ghost"
                    accessoryRight={<Icon name="checkmark-circle-outline" />}
                    onPress={() => {
                        completeMission(mission.id);
                    }}
                >
                    Success
                </Button>
            </View>
        </Layout>
    );
};
