import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const ContainerVazio = ({ 
  title, 
  onPress = () => {},
}) => {
    return (
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: "100%",
          marginTop: 10,
          padding: 8,
          backgroundColor: 'whitesmoke',
          borderWidth: 1,
          borderRadius: 6,
          borderColor: "#DCDCDC",
        }}
        onPress={onPress}
      >
        <View
          style={{
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#000000",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            >
            {`${title}`}
          </Text>
        </View>

        <View
          style={{
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "#000000",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            >
            Você não tem próximas viagens registradas!
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              fontStyle: "italic" ,
              color: "#000000",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            >
            Registre aqui!
          </Text>
        </View>
      </TouchableOpacity>
    )
}