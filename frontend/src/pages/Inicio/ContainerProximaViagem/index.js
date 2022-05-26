import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const ContainerProximaViagemInicio = ({ 
  title, 
  name, 
  country, 
  departure_date,
  onPress = () => {},
  day,
  activity
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
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>
              Título:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                textTransform: "uppercase",
                marginLeft: 6,
              }}
              >
              {`${name}`}
            </Text>
          </View>
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
              }}
            >
                <Text
                  style={{
                    textTransform: "capitalize"
                  }}
                >
                  Data:
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#084594",
                    textAlign: "center",
                    textTransform: "uppercase",
                    marginLeft: 6,
                  }}
                  >
                  {`${departure_date}`}
                </Text>
                </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
            <Text
              style={{
                textTransform: "capitalize"
              }}
              >
              Destino:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                textTransform: "uppercase",
                marginLeft: 6,
              }}
              >
              {`${country}`}
            </Text>
          </View>
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
              }}
            >
                <Text
                  style={{
                    textTransform: "capitalize"
                  }}
                >
                  Qtde. Dias:
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#084594",
                    textAlign: "center",
                    textTransform: "uppercase",
                    marginLeft: 6,
                  }}
                  >
                  {`${day}`}
                </Text>
                </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
            <Text
              style={{
                textTransform: "capitalize"
              }}
              >
              Qtde. Atividades:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                textTransform: "uppercase",
                marginLeft: 6,
              }}
              >
              {`${activity}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}