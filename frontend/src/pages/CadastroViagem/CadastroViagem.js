import React, { useState, useCallback, useReducer, useContext, useEffect } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import { UserContext } from '../../UseContext/UserContext';
import * as api from '../../services/api';

const CadastroViagem = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {context} = useContext(UserContext);
  const [trip, setTrip] = useState({
    title: '',
    departureDate: '',
    arrivalDate: '',
    type: '',
  });
  const [back, setBack] = useState(false);
  useEffect(() => {if (back) navigation.goBack()}, [back]);

  const checkRequiredField = useCallback(() => {
    if (trip.title === '' || trip.departureDate === '' || trip.arrivalDate === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para cadastrar uma nova viagem!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [trip.title, trip.departureDate, trip.arrivalDate, trip.type, state]);

  const FormatDate = (date) => {
    var dia  = date.split("/")[0];
    var mes  = date.split("/")[1];
    var ano  = date.split("/")[2];
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  }

  const handlePostTravel = async (newTrip) => {
    try {
      await api.requestCreate(context.userId, 'travel', newTrip);
      dispatch({type: actions.setMessage, payload: 'Viagem cadastrada com sucesso!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
      dispatch({type: actions.showAlert, payload: true });
      setTimeout(function() { setBack(true); }, 3000);
    } catch (error) {
      dispatch({type: actions.setMessage, payload: error});
      dispatch({type: actions.showAlert, payload: true });
      console.log(error)
    } finally {
      dispatch({type: actions.toggleLoading});
    }
  }

  const handleConfirmButton = useCallback(async () => {
      dispatch({type: actions.toggleLoading});
      checkRequiredField();
      const newArrivalDate = FormatDate(trip.arrivalDate);
      const newDepartureDate = FormatDate(trip.departureDate)
      const newTrip = {...trip, arrivalDate:newArrivalDate, departureDate:newDepartureDate}
      await handlePostTravel(newTrip);
  }, [checkRequiredField])

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <ButtonReturnYellow 
          iconName='west' 
          onPress={() => navigation.goBack()} 
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
