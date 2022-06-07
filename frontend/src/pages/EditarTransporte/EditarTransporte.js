import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Alert, TitleRow, ButtonRow, CardEditarTransporte, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
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
          <Card width="90%" height={0.22}>
          <ButtonReturnYellow 
            marginBottom={10}
            iconName='west' 
            onPress={() => navigation.navigate("Editar Viagem")} 
             />
          <TitleRow text="Editar Transporte" />
            <View style={{
              width: "100%",
              }}>
              <CardEditarTransporte/>
              <ButtonRow              
                text="Alterar"
                onPress={() => handleConfirmButton()}
              />
            </View>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarTransporte;