import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const ContainerAtividade = ({ country, description, value, type, time, navigation }) => {
  
  const handleDelete = useCallback(async () => {
      try {
        dispatch({type: actions.toggleLoading});
        //deleteActivity(id_activity)
        dispatch({type: actions.setMessage, payload: 'Sua atividade foi removida!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
        dispatch({type: actions.showAlert, payload: true });
      } catch (error) {
        dispatch({type: actions.setMessage, payload: 'Não foi possível remover a atividade, tente novamente!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
        dispatch({type: actions.showAlert, payload: true });
      } finally {
        dispatch({type: actions.toggleLoading});
      }
  }, [])
  
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
            {`${description}`}
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
            onPress={() => navigation.navigate('Editar Atividade')}
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
            onPress={handleDelete}
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
            margin: 4,
          }}
        >
            <Text>País:</Text>
            <Text 
              style={{
                fontSize: 14,
                fontWeight: "600",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#084594",
                marginLeft: 6,
              }}
            >
              {`${country}`}
            </Text>
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
                fontSize: 14,
                fontWeight: "600",
                textAlign: "center",
                color: "#084594",
                marginLeft: 6,
              }}
            >
              R$ {`${value}`}
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
                  Tipo:              
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${type}`}
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
                fontSize: 14,
                fontWeight: "600",
                color: "#084594",
                textAlign: "center",
                marginLeft: 6,
              }}
              >
              {`${time}`}
            </Text>
          </View>
        </View>
      </View>
    )
}