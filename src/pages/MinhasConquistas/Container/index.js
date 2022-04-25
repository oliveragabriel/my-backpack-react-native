import React from 'react';
import { View, Text } from 'react-native';

export const ContainerConquista = ({ value, text}) => {
    return (
      <View
        style={{
          width: "100%",
          marginTop: 10,
          padding: 30,
          backgroundColor: 'whitesmoke',
          borderWidth: 1,
          borderRadius: 6,
          borderColor: "#DCDCDC",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "900",
            color: "#084594",
            textAlign: "center",
            textTransform: "capitalize"
          }}
        >
          {`${value}`}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          {`${text}`}
        </Text>
      </View>
    )
}