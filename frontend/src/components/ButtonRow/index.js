import React from 'react';
import { Container, Button, ButtonText } from '../../styles';

export const ButtonRow = ({ text, onPress = () => {}, disabled }) => {
    return (
        <Container direction border="none"> 
            <Button border="none" onPress={onPress} disabled={disabled}>
                <ButtonText fontSize={16} fontWeight="400" color="#FFFFFF">{text}</ButtonText>
            </Button>
        </Container>
    )
};