import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ContainerConquistaInicio = ({ title, travel, country, onPress = () => {}}) => {
    return (
      <TouchableOpacity
        style={{
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
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}
          >
            <Text
              style={{
                width: '25%',
                fontSize: 18,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                textTransform: "capitalize"
              }}
              >
              {`${travel}`}
            </Text>
            <Text
              style={{
                textTransform: "capitalize"
              }}
            >
              Viagens
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}
          >
            <Text
              style={{
                width: '25%',
                fontSize: 18,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                textTransform: "capitalize"
              }}
              >
              {`${country}`}
            </Text>
            <Text
              style={{
                textTransform: "capitalize"
              }}
            >
              Países
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}