import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, View } from 'react-native';
import RepositoryListItem from '../../repositories/components/repository-list-item.component';

const FavouritesWrapper = styled.View`
    padding: 16px;
`;
const FavouritesTextBar = styled.Text`
    marginleft: 10px;
`;
const FlexView = styled.View`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100vh;
`;
function FavouritesList({ favourites }) {
    if (!favourites.length) {
        return (
            <FlexView>
                <Text>You have not added any favorites</Text>
            </FlexView>
        );
    }

    return (
        <FavouritesWrapper>
            <FavouritesTextBar>Favourites</FavouritesTextBar>
            <ScrollView>
                {favourites.map((repository) => {
                    return (
                        <View key={repository.id}>
                            <RepositoryListItem repository={repository} />
                        </View>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
}

export default FavouritesList;
