import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List, Layout, ListItem, Icon, Divider, useTheme } from '@ui-kitten/components';
import { ListRenderItem, StyleSheet } from 'react-native';
import { RootStackParamList, useRootNavigation } from '@/RootStack';
import { Mission, MissionWithProgress } from '@/screens/Crew/types';
import { useMissionProgressStore } from '@/screens/Crew/store';
import { Missions } from '../data';

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
    missions: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        paddingVertical: 30,
    },
});

interface MissionListItemProps {
    mission: MissionWithProgress;
}
const MissionListItem: React.FC<MissionListItemProps> = ({ mission }) => {
    const navigation = useRootNavigation();
    const theme = useTheme();

    return (
        <ListItem
            title={`Mission #${mission.id}`}
            accessoryRight={() => {
                const progress = mission.progress || { successes: 0, failures: 0 };
                if (progress.successes >= 1) {
                    return (
                        <Icon style={styles.icon} fill={theme['color-success-600']} name="checkmark-circle-outline" />
                    );
                }
                if (progress.failures >= 1) {
                    return <Icon style={styles.icon} fill={theme['color-danger-600']} name="close-outline" />;
                }
                return <></>;
            }}
            style={styles.missions}
            onPress={() => navigation.navigate('Mission', { mission: mission })}
        />
    );
};

const renderItem: ListRenderItem<MissionWithProgress> = ({ item: mission }) => {
    return <MissionListItem mission={mission} />;
};

type LogbookScreenProps = NativeStackScreenProps<RootStackParamList, 'Logbook'>;
export const LogbookScreen: React.FC<LogbookScreenProps> = () => {
    const missionsProgress = useMissionProgressStore((state) => state.progress);

    const missionsWithProgress = Missions.map((mission) => {
        return {
            ...mission,
            progress: missionsProgress[mission.id] || { failures: 0, successes: 0 },
        };
    });

    return (
        <Layout>
            <List<MissionWithProgress>
                data={missionsWithProgress}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
        </Layout>
    );
};
