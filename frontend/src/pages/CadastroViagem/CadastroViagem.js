import React, { useState, useCallback, useReducer, useContext } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import { UserContext } from '../../UseContext/UserContext';
import * as api from '../../services/api';

const CadastroViagem = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {user, resetTravels} = useContext(UserContext);
  const [trip, setTrip] = useState({
    title: '',
    departureDate: '',
    arrivalDate: '',
    type: '',
  });

  const checkRequiredField = useCallback(() => {
    if (trip.title === '' || trip.departureDate === '' || trip.arrivalDate === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para cadastrar uma nova viagem!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [trip.title, trip.departureDate, trip.arrivalDate, trip.type, state]);

  const handleConfirmButton = useCallback( async () => {
    try {
      dispatch({type: actions.toggleLoading});
      checkRequiredField();
      await api.requestCreate(user.id, 'travel', trip);
      //resetTravels();
      navigation.navigate('Minhas Viagens');
    } catch(error) {
      dispatch({type: actions.setMessage, payload: error});
      dispatch({type: actions.showAlert, payload: true });
    } finally {
      dispatch({type: actions.toggleLoading});
    }
    
  }, [checkRequiredField])

  return (
    <>
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
            defaultValue={trip.arrivalDate ?? null}
            onChangeText={text => setTrip({ ...trip, arrivalDate: text})}
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="Data de Volta"
            defaultValue={trip.departureDate ?? null}
            onChangeText={text => setTrip({ ...trip, departureDate: text})}
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
            disabled={state.loading}
            onPress={() => handleConfirmButton()}
          />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default CadastroViagem;
