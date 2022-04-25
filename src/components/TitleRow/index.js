import React from 'react';
import { Container, Title, Spacer } from '../../styles';

export const TitleRow = ({ text }) => {
    return (
        <Container border="none" padding={10}>
            <Spacer height={40} margin={10}>
                <Title>{text}</Title>
            </Spacer>
        </Container>
    )
};