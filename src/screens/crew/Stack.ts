import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type CrewStackParamList = {
    CrewHome: undefined;
    Logbook: undefined;
    Mission: undefined;
};

export const CrewStack = createNativeStackNavigator<CrewStackParamList>();
