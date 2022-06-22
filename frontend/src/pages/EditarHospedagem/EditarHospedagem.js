import React, { useState, useCallback, useReducer } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions'
import { initialState, reducer } from './reducers/reducer';

const EditarHospedagem = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [accomodation, setAccomodation] = useState({
    description: '',
    type: '',
    value: 0,
    arrivalDate: "",
    departureDate: "",
  });

  const checkRequiredField = useCallback(() => {
    if(accomodation.description === '' || accomodation.type === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [accomodation.description, accomodation.type, accomodation.value, accomodation.time, state]);

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
          onPress={() => navigation.goBack()} 
        />
        <Card width="90%" height={0.3}>
        <TitleRow text="Editar Hospedagem" />
        <Spacer/>
        <FormItemInput
          required={true}
          placeholder="Descrição"
          defaultValue={accomodation.description ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, description: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Tipo (ex: Hotel, Airbnb)"
          defaultValue={accomodation.type ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, type: text})}
          iconName='home'
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Valor"
          defaultValue={accomodation.value ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, value: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Horário de Saída"
          defaultValue={accomodation.time ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, time: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Horário de Volta"
          defaultValue={accomodation.time ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, time: text})}
        />
        <Spacer />    
        <ButtonRow              
          text="Alterar"
          onPress={() => handleConfirmButton()}
        />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default EditarHospedagem;