// import { Octokit } from '@octokit/core';
import camelize from 'camelize';

export const repositoriesRequest = async (keyword) => {
    // try {
    //     const octokit = new Octokit({
    //         auth: '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',
    //     });
    //     const {
    //         data: { items },
    //     } = await octokit.request(
    //         `GET /search/repositories?q=${keyword}+language:assembly&sort=stars&order=desc`,
    //         {}
    //     );

    //     return items;
    //     return [];
    // } catch (error) {
    //     console.log('Error: Repositories Request', error);
    // }
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=${keyword}&sort=stars&order=desc`,
            {
                headers: {
                    Authorization:
                        'token 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',
                },
            }
        );
        // const json = await response.json();
        // console.log('Response: ', json);
        // return json;
        const { items } = await response.json();
        return items;
    } catch (error) {
        console.log('Error: Repositories Request', error);
    }
};

export const repositoriesTransform = (results) => {
    const mappedResults = results.map((repo) => {
        const {
            created_at,
            description,
            full_name,
            homepage,
            id,
            language,
            stargazers_count,
            url,
        } = repo;

        return {
            created_at,
            description,
            full_name,
            homepage,
            id,
            language,
            stargazers_count,
            url,
        };
    });

    return camelize(mappedResults);
};
