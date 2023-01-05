import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MissionWithProgress } from '@/screens/Crew/types';

export type RootStackParamList = {
    Games: undefined;
    WondersDuel: undefined;
    CrewHome: undefined;
    Logbook: undefined;
    Mission: { mission: MissionWithProgress };
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const useRootNavigation = () => useNavigation<RootNavigation>();
