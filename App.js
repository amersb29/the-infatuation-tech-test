import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Text, View } from 'react-native';

import { theme } from './src/infrastructure/theme';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { SearchContextProvider } from './src/services/search/search.context';
import Navigation from './src/infrastructure/navigation';

export default function App() {
    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <SearchContextProvider>
                        <Navigation />
                    </SearchContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style='auto'></ExpoStatusBar>
        </>
    );
}
