import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout } from '@ui-kitten/components';
import { RootStackParamList } from 'src/RootStack';

type WondersDuelScreenProps = NativeStackScreenProps<RootStackParamList, 'WondersDuel'>;
export const WondersDuelScreen: React.FC<WondersDuelScreenProps> = ({ navigation, route }) => {
    return <Layout style={{ flex: 1 }} />;
};
