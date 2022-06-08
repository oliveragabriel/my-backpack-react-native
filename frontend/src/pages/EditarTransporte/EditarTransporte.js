import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions'
import { initialState, reducer } from './reducers/reducer';

const EditarTransporte = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [transport, setTransport] = useState({
    description: '',
    type: '',
    value: 0,
    arrivalDate: "",
    departureDate: "",
    arrivalPlace: "",
    departurePlace: "",
  });

  const checkRequiredField = useCallback(() => {
    if(transport.description === '' || transport.type === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [transport.description, transport.type, transport.value, transport.time, state]);

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
            onPress={() => navigation.navigate("Editar Viagem")} 
          />
          <Card width="90%" height={0.3}>
            <TitleRow text="Editar Transporte" />
            <FormItemInput
              height={43}
              padding={0}
              fSize={14}
              required={true}
              placeholder="Descrição"
              defaultValue={transport.description ?? null}
              onChangeText={text => setTransport({ ...transport, description: text})}
            />
            <Spacer />
            <FormItemInput
              height={43}
              padding={0}
              fSize={14}
              required={true}
              placeholder="Tipo (ex: Alimentação, Lazer)"
              defaultValue={transport.type ?? null}
              onChangeText={text => setTransport({ ...transport, type: text})}
            />
            <Spacer />
            <FormItemInput
              height={43}
              padding={0}
              fSize={14}
              required={true}
              placeholder="Valor"
              defaultValue={transport.value ?? null}
              onChangeText={text => setTransport({ ...transport, value: text})}
            />
            <Spacer />
            <FormItemInput
                height={43}
                padding={0}
                fSize={14}
                required={true}
                placeholder="Horário de Saída"
                defaultValue={transport.time ?? null}
                onChangeText={text => setTransport({ ...transport, time: text})}
            />
            <Spacer />
            <FormItemInput
                height={43}
                padding={0}
                fSize={14}
                required={true}
                placeholder="Lugar de Saída"
                defaultValue={transport.time ?? null}
                onChangeText={text => setTransport({ ...transport, time: text})}
            />
            <Spacer />
            <FormItemInput
              height={43}
              padding={0}
              fSize={14}
              required={true}
              placeholder="Horário de Volta"
              defaultValue={transport.time ?? null}
              onChangeText={text => setTransport({ ...transport, time: text})}
            />
            <Spacer />
            <FormItemInput
              height={43}
              padding={0}
              fSize={14}
              required={true}
              placeholder="Destino"
              defaultValue={transport.time ?? null}
              onChangeText={text => setTransport({ ...transport, time: text})}
            />
            <Spacer />
            <ButtonRow              
              text="Alterar"
              onPress={() => handleConfirmButton()}
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarTransporte;