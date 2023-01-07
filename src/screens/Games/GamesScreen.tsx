import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/RootStack';
import { WondersDuelScreen } from '@/screens/Wonders/WondersDuelScreen';
import { WondersPlayScreen } from '@/screens/Wonders/components/WondersPlay/WondersPlayScreen';
import { LogbookScreen } from '@/screens/Crew/components/LogbookScreen';
import { MissionScreen } from '@/screens/Crew/components/MissionScreen';
import { CrewHomeScreen } from '@/screens/Crew/CrewHomeScreen';
import { getMissionScreenTitle } from '@/screens/Crew/components/MissionScreen/getMissionScreenTitle';
import { GamesHomeScreen } from './GamesHomeScreen';

export const GamesScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Games"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#2251a6',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <RootStack.Screen name="Games" component={GamesHomeScreen} />
                <RootStack.Screen
                    name="WondersDuel"
                    component={WondersDuelScreen}
                    options={{ title: '7 wonders: duel' }}
                />
                <RootStack.Screen
                    name="WondersPlay"
                    component={WondersPlayScreen}
                    options={{ title: 'Play', headerShown: false }}
                />
                <RootStack.Screen
                    name="CrewHome"
                    component={CrewHomeScreen}
                    options={{ title: 'The Crew: The quest for planet nine' }}
                />
                <RootStack.Screen name="Logbook" component={LogbookScreen} options={{ title: 'Logbook' }} />
                <RootStack.Screen
                    name="Mission"
                    component={MissionScreen}
                    options={({ route }) => ({ title: getMissionScreenTitle(route.params.mission) })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
