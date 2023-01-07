import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout, Button } from '@ui-kitten/components';
import { RootStackParamList } from 'src/RootStack';

type WondersDuelScreenProps = NativeStackScreenProps<RootStackParamList, 'WondersDuel'>;
export const WondersDuelScreen: React.FC<WondersDuelScreenProps> = ({ navigation }) => {
    return (
        <Layout style={{ flex: 1, padding: 20 }}>
            <Button style={{ marginBottom: 20 }} onPress={() => navigation.navigate('WondersPlay')}>
                Play
            </Button>
            <Button onPress={() => navigation.navigate('WondersScore')}>Score</Button>
        </Layout>
    );
};
