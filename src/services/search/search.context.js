import React, { createContext, useCallback, useEffect, useState } from 'react';
import { repositoriesRequest, repositoriesTransform } from './search.service';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('graphql');
    const [repositories, setRepositories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    const retrieveUserRepositories = () => {
        repositoriesRequest(keyword)
            .then(repositoriesTransform)
            .then((mappedResults) => {
                setRepositories(mappedResults);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    };
    useEffect(() => {
        retrieveUserRepositories();
    }, []);

    useEffect(() => {
        if (!keyword.length) {
            return;
        }

        setIsLoading(true);
        setRepositories([]);

        retrieveUserRepositories();
    }, [keyword]);

    return (
        <SearchContext.Provider
            value={{
                isLoading,
                error,
                keyword,
                repositories,
                search: onSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
