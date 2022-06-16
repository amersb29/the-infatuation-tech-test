import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import FavouriteButton from '../../favourites/components/favourite.component';

const StarContainer = styled.View`
    display: flex;
`;
const CustomCard = styled(Card)`
    margin: 8px;
`;
const CustomCardTitle = styled(Card.Title)`
    width: 86%;
`;

const LeftContent = (props) => (
    <StarContainer>
        <Ionicons name='md-logo-github' size={48} color='black' />
    </StarContainer>
);

const RepositoryListItem = ({ repository }) => {
    return (
        <CustomCard>
            <FavouriteButton repository={repository} />
            <CustomCardTitle title={repository.fullName} left={LeftContent} />
            <Card.Content>
                <Paragraph>
                    <b>Description:</b> {repository.description}
                </Paragraph>
                <StarContainer>
                    <Text>
                        <b>Language:</b> {repository.language}
                    </Text>
                    <Text>
                        <b>Stars:</b> {repository.stargazersCount}
                    </Text>
                </StarContainer>
            </Card.Content>
        </CustomCard>
    );
};

export default RepositoryListItem;
