import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CrewStackParamList } from 'src/screens/crew/Stack';
import React from 'react';

type MissionScreenProps = NativeStackScreenProps<CrewStackParamList, 'Mission'>;
export const MissionScreen: React.FC<MissionScreenProps> = () => {
    return <></>;
};
