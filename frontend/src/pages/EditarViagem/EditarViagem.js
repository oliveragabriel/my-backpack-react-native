import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Alert, TitleRow, ButtonRow, BottomNav, CardEditarViagem, ButtonReturnYellow } from '../../components';
import { Card, Container, Button, ButtonText } from '../../styles';
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
        <Container bgColor="#293775">
          {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%" height={0.3}>
          <ButtonReturnYellow 
            marginBottom={10}
            iconName='west' 
            onPress={() => navigation.navigate("Minhas Viagens")} 
             />
          <TitleRow text="Editar Viagem" 
              height={40} />
            <View style={{
                width: "100%",
                }}>
              <CardEditarViagem/>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4FCF78',
              width: 100,
              height: 40,
              padding: 6,
              borderRadius: 6,
            }}
            onPress={() => navigation.navigate('Editar Viagem')}
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
              backgroundColor: '#4FCF78',
              height: 40,
              width: 100,
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
              backgroundColor: '#4FCF78',
              height: 40,
              width: 100,
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
          </View>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarViagem;
