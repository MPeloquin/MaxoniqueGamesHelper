import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List, Layout, Card, Text } from '@ui-kitten/components';
import { ListRenderItem } from 'react-native';
import { RootStackParamList, useRootNavigation } from '@/RootStack';
import { Mission } from '@/screens/Crew/types';
import { Missions } from '../data';

export const MissionListItem: React.FC<MissionListItemProps> = ({ mission }) => {
    const navigation = useRootNavigation();
    return (
        <Card style={{ padding: 10 }} onPress={() => navigation.navigate('Mission', { mission: mission })}>
            <Text>Mission #{mission.id}</Text>
        </Card>
    );
};

const renderItem: ListRenderItem<Mission> = ({ item: mission }) => {
    return <MissionListItem mission={mission} />;
};

type LogbookScreenProps = NativeStackScreenProps<RootStackParamList, 'Logbook'>;
export const LogbookScreen: React.FC<LogbookScreenProps> = () => {
    return (
        <Layout>
            <List data={Missions} renderItem={renderItem} />
        </Layout>
    );
};

interface MissionListItemProps {
    mission: Mission;
}
