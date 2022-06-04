import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Alert, TitleRow, ButtonRow, CardEditarAtividade, BottomNav } from '../../components';
import { Card, Container } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const EditarAtividade = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activity, setActivity] = useState({
    description: '',
    type: '',
    value: 0,
    time: null,
  });

  const checkRequiredField = useCallback(() => {
    if(activity.description === '' || activity.type === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [activity.description, activity.type, activity.value, activity.time, state]);

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
          <TitleRow text="Editar Atividade" />
            <View style={{
              width: "100%",
              }}>
              <CardEditarAtividade/>
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

export default EditarAtividade;