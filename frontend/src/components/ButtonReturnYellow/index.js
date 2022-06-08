import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonReturnYellow = ({onPress = () => {}, iconName }) => {
    return ( 
        <View
            style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                top: 4,
                left: 16,
                position: 'absolute',
                zIndex: 2,
            }}
        >
            <TouchableOpacity 
                onPress={onPress} 
                style={{
                    borderRadius: 18,
                    backgroundColor:'#ffe175',
                    width: 30,
                }}
                >
                <Text> 
                  <Icon 
                        name={iconName} 
                        style={{ 
                            color: "#084594",
                            fontSize: 30, 
                        }}/> 
                </Text>
            </TouchableOpacity>
        </View>
    )
};