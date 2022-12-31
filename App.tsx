import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Profile: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
