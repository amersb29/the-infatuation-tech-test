import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import SafeArea from '../../../components/utility/safe-area.component';
import { FlatList } from 'react-native';
import { ActivityIndicator, Colors, List } from 'react-native-paper';
import { SearchContext } from '../../../services/search/search.context';
import { Search } from '../components/search.component';
import RepositoryListItem from '../../repositories/components/repository-list-item.component';

const RepositoriesList = styled(FlatList).attrs({
    contentContainterStyle: {
        padding: 16,
    },
})``;
const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;
const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const SearchScreen = ({ navigation }) => {
    const { repositories, isLoading } = useContext(SearchContext);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color={Colors.blue500}
                    />
                </LoadingContainer>
            )}

            <Search />

            <RepositoriesList
                data={repositories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RepositoryListItem repository={item} />
                )}
            ></RepositoriesList>
        </SafeArea>
    );
};

export default SearchScreen;
