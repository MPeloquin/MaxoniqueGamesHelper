import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Layout } from '@ui-kitten/components';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RootStackParamList } from 'src/RootStack';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    },
    logo: {
        width: 150,
        height: 200,
    },
});

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Crew')}>
                <Image style={styles.logo} source={require('../../../assets/crewPlanetNine.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WondersDuel')}>
                <Image style={styles.logo} source={require('../../../assets/7wondersduel.jpg')} />
            </TouchableOpacity>
        </Layout>
    );
};
