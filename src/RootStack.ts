import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Mission } from '@/screens/Crew/types';

export type RootStackParamList = {
    Games: undefined;
    WondersDuel: undefined;
    CrewHome: undefined;
    Logbook: undefined;
    Mission: { mission: Mission };
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
