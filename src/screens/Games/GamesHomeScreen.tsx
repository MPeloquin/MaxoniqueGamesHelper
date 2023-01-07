import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout } from '@ui-kitten/components';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RootStackParamList } from '@/RootStack';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around',
    },
    logo: {
        width: 150,
        height: 200,
    },
});

type GamesScreenProps = NativeStackScreenProps<RootStackParamList, 'Games'>;

export const GamesHomeScreen: React.FC<GamesScreenProps> = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('CrewHome')}>
                <Image style={styles.logo} source={require('../../../assets/crew/box.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WondersDuel')}>
                <Image style={styles.logo} source={require('../../../assets/wonders/box.jpg')} />
            </TouchableOpacity>
        </Layout>
    );
};
