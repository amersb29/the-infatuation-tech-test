import React, { createContext, useEffect, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log('Error storing', e);
        }
    };

    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favourites');
            if (value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log('Error loading', e);
        }
    };

    const add = (repo) => {
        setFavourites([...favourites, repo]);
    };

    const remove = (repo) => {
        const newFavourites = favourites.filter((r) => r.id !== repo.id);
        setFavourites(newFavourites);
    };

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(
            favourites.sort((a, b) =>
                a.stargazersCount < b.stargazersCount ? 1 : -1
            )
        );
    }, [favourites]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};
