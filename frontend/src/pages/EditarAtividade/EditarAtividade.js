import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow } from './src/components';
import { Card, Container, Spacer } from './src/styles';
import { actions } from './src/pages/AcessarConta/reducers/actions';
import { initialState, reducer } from './src/pages/AcessarConta/reducers/reducer';

const EditarAtividade = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activity, setActivity] = useState({
    description: '',
    type: '',
    value: 0,
    time: null,
  });

  console.log(state);
  console.log(activity);

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
        <Container bgColor="#085E7D">
          {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%">
          <TitleRow text="Editar Atividade" />
            <FormItemInput
              required={true}
              placeholder="Descrição"
              defaultValue={activity.description ?? null}
              onChangeText={text => setActivity({ ...activity, description: text})}
              // iconName='account'
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Tipo"
              defaultValue={activity.type ?? null}
              onChangeText={text => setActivity({ ...activity, type: text})}
            />
            <Spacer />
            <FormItemInput
              placeholder="Valor"
              defaultValue={activity.value ?? null}
              onChangeText={text => setActivity({ ...activity, value: text})}
            />
            <Spacer />
            <FormItemInput
              placeholder="Horário"
              defaultValue={activity.time ?? null}
              onChangeText={text => setActivity({ ...activity, time: text})}
            />
            <Spacer />
            <ButtonRow
              text="Alterar"
              onPress={() => handleConfirmButton()}
              // iconName="check"
            />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarAtividade;