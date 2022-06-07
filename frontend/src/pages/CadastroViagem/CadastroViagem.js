import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Alert, TitleRow, ButtonRow, BottomNav, CardEditarViagem, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
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
          <Card width="90%" height={0.3}>
          <ButtonReturnYellow 
            marginBottom={10}
            iconName='west' 
            onPress={() => navigation.navigate("Minhas Viagens")} 
             />
          <TitleRow text="Adicionar Nova Viagem" />
          <View style={{
              width: "100%",
              }}>
            <CardEditarViagem/>
            <ButtonRow
              text="Cadastrar"
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

export default CadastroViagem;
