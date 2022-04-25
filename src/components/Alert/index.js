import React from 'react';
import { View, Text } from 'react-native';
import { AlertDrawer } from '../../styles/AlertDrawer';

export const Alert = ({ message, onPress = () => {}, iconName, bgColor}) => {
    return (
        <AlertDrawer bgColor={bgColor} onPress={onPress}>
          <View 
            style={{ 
              width: '100%', 
              position: 'absolute', 
              marginLeft: 6 
            }}
          >
            <Text 
              style={{ 
                fontSize: 10, 
                fontWeight: '900', 
                textAlign: 'right', 
                color: '#000000' 
              }}
            >
              X
            </Text>
          </View>
          <Text 
            style={{ 
              marginTop: 20, 
              marginLeft: 6, 
              marginRight: 6, 
              fontWeight: '400', 
              textAlign: 'center', 
              color: '#000000' 
            }}
          >
            {message}
          </Text>
        </AlertDrawer>
    )
}