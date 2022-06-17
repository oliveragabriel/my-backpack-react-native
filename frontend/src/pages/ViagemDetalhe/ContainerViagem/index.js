import React, { useContext, useReducer } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { UserContext } from '../../../UseContext/UserContext';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../../services/api';

export const ContainerViagem = ({navigation, travel}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {contextSetTravels} = useContext(UserContext)

  const handleDeleteTravel = async () => {
    try {
      await api.requestDelete(travel.id, 'travel')
      dispatch({type: actions.setMessage, payload: 'Viagem deletada com sucesso!'});
      dispatch({type: actions.showAlert, payload: true });
    } catch (error) {
      dispatch({type: actions.showAlert, payload: true });
      dispatch({type: actions.setMessage, payload: 'A viagem não pode ser deletada, tente novamente!'});
      console.log(error)
    }
  }

  const handleDeleteButton = () => {
    handleDeleteTravel()
    contextSetTravels()
    navigation.navigate("Minhas Viagens")
  }
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
            onPress={() => navigation.navigate('Editar Viagem')}
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
            onPress={handleDeleteButton}
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
            <Text>País(es):</Text>
            <Text 
              style={{
                fontSize: 12,
                fontWeight: "600",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#084594",
                marginLeft: 6,
              }}
            >
              {`${travel?.countries?.replace(',', ', ')}`}
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
                fontSize: 12,
                fontWeight: "600",
                textAlign: "center",
                color: "#084594",
                marginLeft: 6,
              }}
            >
              R$ {`${0}`}
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
                  Saída:              
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