import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout, Button } from '@ui-kitten/components';
import { RootStackParamList } from '@/RootStack';

type CrewHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'CrewHome'>;
export const CrewHomeScreen: React.FC<CrewHomeScreenProps> = ({ navigation }) => {
    return (
        <Layout style={{ flex: 1, padding: 20 }}>
            <Button onPress={() => navigation.navigate('Logbook')}>Logbook</Button>
        </Layout>
    );
};
