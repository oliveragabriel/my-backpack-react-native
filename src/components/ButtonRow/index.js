import React from 'react';
import { Container, Button, ButtonText } from '../../styles';
// import { Icon } from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export const ButtonRow = ({ text, onPress = () => {}, iconName, disabled }) => {
    return (
        <Container direction border="none"> 
            <Button border="none" onPress={onPress} disabled={disabled}>
                {/* 
                    <Icon 
                        name={iconName} 
                        size={26} 
                        style={{ 
                            color: "#7B8794", 
                            position: 'absolute', 
                            left: 30, 
                            top: 12 
                        }}
                    /> 
                */}
                <ButtonText fontSize={16} fontWeight="400" color="#FFFFFF">{text}</ButtonText>
            </Button>
        </Container>
    )
};