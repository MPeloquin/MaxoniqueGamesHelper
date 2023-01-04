import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/RootStack';
import { WondersDuelScreen } from '@/screens/Wonders/WondersDuelScreen';
import { LogbookScreen } from '@/screens/Crew/components/LogbookScreen';
import { MissionScreen } from '@/screens/Crew/components/MissionScreen';
import { CrewHomeScreen } from '@/screens/Crew/CrewHomeScreen';
import { GamesHomeScreen } from './GamesHomeScreen';

export const GamesScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Games"
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
                <RootStack.Screen name="Games" component={GamesHomeScreen} />
                <RootStack.Screen
                    name="WondersDuel"
                    component={WondersDuelScreen}
                    options={{ title: '7 wonders: duel' }}
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
                    options={({ route }) => {
                        return { title: `Mission #${route.params.mission.id}` };
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
