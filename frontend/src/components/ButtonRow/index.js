import React from 'react';
import { Container, Button, ButtonText } from '../../styles';

export const ButtonRow = ({ text, margin, onPress = () => {}, disabled, backgroundColor }) => {
    return (
        <Container direction border="none"> 
            <Button border="none" onPress={onPress} disabled={disabled} margin={margin} bgColor={backgroundColor} >
                <ButtonText fontSize={16} fontWeight="400" color="#FFFFFF">{text}</ButtonText>
            </Button>
        </Container>
    )
};