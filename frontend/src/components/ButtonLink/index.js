import React from 'react';
import { Button, ButtonText } from '../../styles';

export const ButtonLink = ({ text, onPress = () => {} }) => {
    return (    
        <Button 
            height={40} 
            width="auto"  
            padding={10} 
            border="none" 
            bgColor="#FFFFFF" 
            onPress={onPress}
        >
            <ButtonText 
                fontSize={12} 
                fontWeight="800" 
                txtColor="#908F8F"
            >
                {`${text}`}
            </ButtonText>
        </Button>
    )
}