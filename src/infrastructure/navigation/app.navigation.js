import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import FavouritesScreen from '../../features/favourites/screens/favourites.screen';
import SearchScreen from '../../features/search/screens/search.screen';

// import Favourite

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Search: 'md-search',
    Favourites: 'md-heart',
};

const createScreenOptions = ({ route, theme }) => {
    const iconName = TAB_ICON[route.name];

    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#011936ff',
        tabBarInactiveTintColor: '#82a3a1ff',
    };
};

const AppNavigation = () => (
    <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Favourites' component={FavouritesScreen} />
    </Tab.Navigator>
);

export default AppNavigation;
