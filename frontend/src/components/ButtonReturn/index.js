import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container } from '../../styles';
// import { Icon } from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export const ButtonReturn = ({ text, onPress = () => {}, iconName }) => {
    return (
        <Container 
            bgColor="#E4E7EB" 
            direction 
            width="15%" 
            border='1px solid #B2B2B2' 
            style={{ 
                borderRadius: 6, 
                height: 30 
            }}
        > 
            <TouchableOpacity onPress={onPress}>
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
                <Text 
                    style={{ 
                        fontSize: 11, 
                        fontWeight: '400', 
                        color: '#000000' 
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </Container>
    )
};