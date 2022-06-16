import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import FavouritesList from '../components/favourites-list.component';

const FavouritesScreen = () => {
    const { favourites } = useContext(FavouritesContext);
    return <FavouritesList favourites={favourites} />;
};

export default FavouritesScreen;
