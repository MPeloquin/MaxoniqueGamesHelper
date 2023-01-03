import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RootStack } from './RootStack';
import { HomeScreen } from './screens/home/HomeScreen';
import { WondersDuelScreen } from './screens/wonders/WondersDuelScreen';
import { CrewScreen } from './screens/crew/CrewScreen';

export const App = () => {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.dark}>
                <NavigationContainer>
                    <RootStack.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#3366FF',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        <RootStack.Screen name="Home" component={HomeScreen} />
                        <RootStack.Screen
                            name="WondersDuel"
                            component={WondersDuelScreen}
                            options={{ title: '7 wonders: duel' }}
                        />
                        <RootStack.Screen
                            name="Crew"
                            component={CrewScreen}
                            options={{ title: 'The Crew: The quest for planet nine' }}
                        />
                    </RootStack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        </>
    );
};
