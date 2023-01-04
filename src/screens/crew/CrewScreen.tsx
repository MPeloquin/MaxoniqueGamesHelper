import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/RootStack';
import { Layout, Button } from '@ui-kitten/components';
import { CrewStack, CrewStackParamList } from './Stack';
import { LogbookScreen } from './components/LogbookScreen';
import { MissionScreen } from './components/MissionScreen';

type CrewScreenProps = NativeStackScreenProps<RootStackParamList, 'Crew'>;
export const CrewScreen: React.FC<CrewScreenProps> = () => {
    return (
        <CrewStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <CrewStack.Screen name="CrewHome" component={CrewHomeScreen} options={{ title: '' }} />
            <CrewStack.Screen name="Logbook" component={LogbookScreen} />
            <CrewStack.Screen name="Mission" component={MissionScreen} />
        </CrewStack.Navigator>
    );
};

type CrewHomeScreenProps = NativeStackScreenProps<CrewStackParamList, 'CrewHome'>;
const CrewHomeScreen: React.FC<CrewHomeScreenProps> = ({ navigation }) => {
    return (
        <Layout style={{ flex: 1, padding: 20 }}>
            <Button onPress={() => navigation.navigate('Logbook')}>Logbook</Button>
        </Layout>
    );
};
