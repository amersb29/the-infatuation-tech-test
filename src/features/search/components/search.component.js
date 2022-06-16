import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { SearchContext } from '../../../services/search/search.context';

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.sizes.sm};
`;

export const Search = () => {
    const { keyword, search } = useContext(SearchContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
                placeholder='Enter the keyword'
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};
