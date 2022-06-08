import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions/';
import { initialState, reducer } from './reducers/reducer';

const CadastroDesejo = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [wish, setWish] = useState({
    description: '',
  });

  console.log(state);
  console.log(wish);

  const checkRequiredField = useCallback(() => {
    if(wish.description === '') {
      dispatch({type: actions.setMessage, payload: 'O campo é obrigatório e deve ser preenchido para cadastrar um desejo!'});
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
        <Container bgColor="#293775">
          {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Desejos")} />
          <Card width="90%"height={0.65}>
          <TitleRow text="Adicionar Novo Desejo" />
            <FormItemInput
              required={true}
              placeholder="Que viagem você gostaria de fazer?"
              defaultValue={wish.description ?? null}
              onChangeText={text => setWish({ ...wish, description: text})}
            />
            <Spacer />
            <ButtonRow
              text="Cadastrar"
              onPress={() => handleConfirmButton()}
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CadastroDesejo;