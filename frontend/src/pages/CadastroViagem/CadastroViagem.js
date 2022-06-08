import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const CadastroViagem = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [trip, setTrip] = useState({
    title: '',
    departure: null,
    arrival: null,
    type: '',
  });

  const checkRequiredField = useCallback(() => {
    if(trip.title === '' || trip.departure === '' || trip.arrival === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para cadastrar uma nova viagem!'});
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
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <ButtonReturnYellow 
            iconName='west' 
            onPress={() => navigation.navigate("Minhas Viagens")} 
          />
          <Card width="90%" height={0.3}>
          <TitleRow text="Adicionar Nova Viagem" />
            <Spacer />
          <FormItemInput
              required={true}
              placeholder="Título"
              autoComplete="name"
              defaultValue={trip.title ?? null}
              onChangeText={text => setTrip({ ...trip, title: text})}
              iconName='cloud'
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
            <ButtonRow
              text="Cadastrar"
              onPress={() => handleConfirmButton()}
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CadastroViagem;
