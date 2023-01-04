import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Mission } from '@/screens/Crew/types';

export type RootStackParamList = {
    Games: undefined;
    WondersDuel: undefined;
    CrewHome: undefined;
    Logbook: undefined;
    Mission: { mission: Mission };
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const useRootNavigation = () => useNavigation<RootNavigation>();
