import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@ui-kitten/components';
import { RootStackParamList } from 'src/RootStack';

type CrewScreenProps = NativeStackScreenProps<RootStackParamList, 'Crew'>;
export const CrewScreen: React.FC<CrewScreenProps> = ({ navigation, route }) => {
    return <Text category="h1">The Crew: The quest for planet nine</Text>;
};
