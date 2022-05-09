import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow } from './src/components';
import { Card, Container, Spacer } from './src/styles';
import { actions } from './src/pages/AcessarConta/reducers/actions';
import { initialState, reducer } from './src/pages/AcessarConta/reducers/reducer';

const EditarDesejo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [wish, setWish] = useState({
    description: '',
  });

  console.log(state);
  console.log(wish);

  const checkRequiredField = useCallback(() => {
    if(wish.description === '') {
      dispatch({type: actions.setMessage, payload: 'O campo Descrição é obrigatório e deve ser preenchido para cadastrar um desejo!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [wish.description, state]);

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
          <TitleRow text="Editar Desejo" />
            <FormItemInput
              required={true}
              placeholder="Descrição"
              defaultValue={wish.description ?? null}
              onChangeText={text => setWish({ ...wish, description: text})}
              // iconName='account'
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

export default EditarDesejo;