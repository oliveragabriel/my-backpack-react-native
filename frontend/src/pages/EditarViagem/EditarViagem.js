import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav } from '../../components';
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
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%">
          <TitleRow text="Editar Viagem" />
            <FormItemInput
              required={true}
              placeholder="Título"
              autoComplete="name"
              defaultValue={trip.title ?? null}
              onChangeText={text => setTrip({ ...trip, title: text})}
              // iconName='account'
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
              text="Alterar"
              onPress={() => handleConfirmButton()}
              // iconName="check"
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarViagem;
