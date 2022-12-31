import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    WondersDuel: undefined;
    Crew: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
