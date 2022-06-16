import React, { useState, useCallback, useReducer } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Alert, TitleRow, FormItemInput, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const EditarViagem = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [trip, setTrip] = useState({
    title: '',
    departure: null,
    arrival: null,
    type: '',
  });

  console.log(state);
  console.log(trip);

  const checkRequiredField = useCallback(() => {
    if(trip.title === '' || trip.departure === '' || trip.arrival === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para alterar sua viagem!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [trip.title, trip.departure, trip.arrival, trip.type, state]);

  const handleConfirmButton = useCallback(() => {
      checkRequiredField();
      dispatch({type: actions.toggleLoading});
  }, [checkRequiredField])

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <ButtonReturnYellow
          iconName='west' 
          onPress={() => navigation.navigate("Viagem Detalhe")} 
        />
        <Card width="90%" height={0.3}>
        <TitleRow text="Editar Viagem" 
            height={40} />
            <Spacer />
        <FormItemInput
            required={true}
            placeholder="Título"
            autoComplete="name"
            defaultValue={trip.title ?? null}
            onChangeText={text => setTrip({ ...trip, title: text})}
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="Data de Ida"
            defaultValue={trip.departure ?? null}
            onChangeText={text => setTrip({ ...trip, departure: text})}
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="Data de Volta"
            defaultValue={trip.arrival ?? null}
            onChangeText={text => setTrip({ ...trip, arrival: text})}
          />
          <Spacer />
          <FormItemInput
            placeholder="Tipo"
            defaultValue={trip.type ?? null}
            onChangeText={text => setTrip({ ...trip, type: text})}
          />
          <Spacer />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4FCF78',
            width: '33%',
            height: 40,
            padding: 6,
            borderRadius: 6,
          }}
          onPress={handleConfirmButton}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
            }} 
          >
                Alterar              
          </Text>
        </TouchableOpacity>
                        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#008E89',
            height: 40,
            width: '33%',
            padding: 6,
            borderRadius: 6,
          }}
          onPress={() => navigation.navigate('Editar Hospedagem')}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
            }} 
          >
                Hospedagem              
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#008E89',
            height: 40,
            width: '33%',
            padding: 6,
            borderRadius: 6,
          }}
          onPress={() => navigation.navigate('Editar Transporte')}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
            }} 
          >
                Transporte              
          </Text>
        </TouchableOpacity>
          </View>
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default EditarViagem;
