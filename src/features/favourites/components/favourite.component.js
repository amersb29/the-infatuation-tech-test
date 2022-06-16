import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

const Favourite = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;
const FavouriteButton = ({ repository }) => {
    const { favourites, addToFavourites, removeFromFavourites } =
        useContext(FavouritesContext);
    const isFavourite = favourites.find((r) => r.id === repository.id);

    return (
        <Favourite
            onPress={() => {
                !isFavourite
                    ? addToFavourites(repository)
                    : removeFromFavourites(repository);
            }}
        >
            <AntDesign
                name={isFavourite ? 'heart' : 'hearto'}
                size={24}
                color={isFavourite ? 'red' : 'black'}
            />
        </Favourite>
    );
};

export default FavouriteButton;
