import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const ContainerViagem = ({ handleDeleteButton, navigation, travel }) => {

    return (
      <View
        style={{
          width: "100%",
          padding: 8,
          backgroundColor: 'whitesmoke',
          borderWidth: 1,
          borderRadius: 6,
          borderColor: "#DCDCDC",
        }}
      >
        <View style={{ margin: 10 }}>
          <Text 
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#000000",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            >
            {`${travel?.title}`}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4FCF78',
              width: 80,
              padding: 10,
              borderRadius: 6,
            }}
            onPress={() => navigation.navigate('Editar Viagem', {id: travel.id})}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
              }} 
            >
                  Editar              
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DF6E6E',
              width: 80,
              padding: 10,
              borderRadius: 6,
            }}
            onPress={() => handleDeleteButton()}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
              }} 
            >
                  Excluir
            </Text>
          </TouchableOpacity>
        </View>
          <View 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
            marginBottom: 4,
          }}
        >
            <Text>Valor Total:</Text>
            <Text 
              style={{
                fontSize: 12,
                fontWeight: "600",
                textAlign: "center",
                color: "#084594",
                marginLeft: 6,
              }}
            >
              R$ {`${travel.total}`}
            </Text>
          </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 4,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 6,
            }}
          >
            <Text>
                  Sa??da:              
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${travel?.arrivalDate?.split('T')[0]}`}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 6,
            }}
          >
            <Text>
                  Retorno:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${travel?.departureDate?.split('T')[0]}`}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 4,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 6,
            }}
          >
            <Text>
                  Qtde. Dias:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${travel?.days}`}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 6,
            }}
          >
            <Text>
                  Qtde. Atividades:
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${travel?.activities}`}
            </Text>
          </View>
        </View>
      </View>
    )
}