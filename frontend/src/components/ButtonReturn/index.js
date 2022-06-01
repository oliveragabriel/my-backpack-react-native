import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonReturn = ({onPress = () => {}, iconName }) => {
    return (
        <Container 
            bgColor="#084594" 
            direction 
            width="15%" 
            border='none' 
            style={{ 
                borderRadius: 6, 
                height: 30 
            }}
        > 
            <TouchableOpacity onPress={onPress}>
                <Text 
                    style={{ 
                        fontSize: 15, 
                        fontWeight: '400', 
                        color: '#fff' ,
                    }}>
                  <Icon 
                        name={iconName} 
                        size={20} 
                        style={{ 
                            color: "#fff", 
                            position: 'absolute', 
                            left: 10, 
                            top: 12 
                        }}/> 
                </Text>
            </TouchableOpacity>
        </Container>
    )
};