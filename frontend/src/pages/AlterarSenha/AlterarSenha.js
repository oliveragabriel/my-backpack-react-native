import React, { useState, useReducer, useCallback } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Container, Card, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const AlterarSenha = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [token, setToken] = useState({
    password: '',
    confirm: '',
  });

  const handleChangePassword = useCallback(() => {
    if(token.password === '' || token.confirm === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Senha e Confirmar Senha são obrigatórios e devem ser preenchidos para alterar!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    if(token.password !== token.confirm) {
      dispatch({type: actions.setMessage, payload: 'A Senha e a Confirmação devem ser iguais. Por favor, preencha o mesmo valor nos dois campos!'});
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    return dispatch({type: actions.showAlert, payload: false });
  }, [token.password, token.confirm, state]);   

  const handleConfirmButton = useCallback(() => {
    handleChangePassword();
    dispatch({type: actions.toggleLoading});
  }, [handleChangePassword]);

  console.log(state);
  console.log(token);

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Meu Perfil")} />
        <Card width="90%" height={0.6}>
          <TitleRow text="Alterar Senha" />
          <FormItemInput
            required={true}
            placeholder="Senha"
            autoComplete='password'
            onChangeText={(text) => setToken({ ...token, password: text })}
            // secureTextEntry
            iconName="lock-outline"
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="Confirme sua Nova Senha"
            onChangeText={(text) => setToken({ ...token, confirm: text })}
            // secureTextEntry
            iconName="lock-outline"
          />
          <Spacer />
          <ButtonRow
            text="Confirmar"
            onPress={() => handleConfirmButton()}
          />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>      
    </>
  );
};

export default AlterarSenha;