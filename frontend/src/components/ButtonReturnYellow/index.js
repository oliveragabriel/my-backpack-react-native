import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonReturnYellow = ({onPress = () => {}, iconName, marginBottom }) => {
    return (
        <View  
            style={{ 
                borderRadius: 6, 
                marginBottom: marginBottom,
                width: 100,
                backgroundColor:'#ffe175',
                alignItems: 'center',
                justifyContent:'center',
            }}> 
            <TouchableOpacity onPress={onPress}>
                <Text 
                    style={{ 
                        fontSize: 15, 
                        fontWeight: '400', 
                        color: '#fff' ,
                    }}>
                  <Icon 
                        name={iconName} 
                        size={35} 
                        style={{ 
                            color: "#084594", 
                            position: 'absolute', 
                            left: 10, 
                            top: 12 ,
                        }}/> 
                </Text>
            </TouchableOpacity>
        </View>
    )
};