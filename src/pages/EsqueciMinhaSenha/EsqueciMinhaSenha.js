import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, ButtonReturn } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const EsqueciMinhaSenha = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState();
  const [credential, setCredential] = useState({
    email: '',
  });

  const checkRequiredField = useCallback(() => {
    if(credential.email === '') {
      dispatch({type: actions.setMessage, payload: 'O campo E-mail é obrigatório e deve ser preenchido para solicitar uma nova senha!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      setStop(true);
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop(false);
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [credential.email, state, stop]);

  const handleConfirmButton = useCallback(() => {
    checkRequiredField();
    if (stop === false) {
      try {
        dispatch({type: actions.toggleLoading});
        dispatch({type: actions.setMessage, payload: 'Uma nova senha foi enviada ao seu e-mail!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
        dispatch({type: actions.showAlert, payload: true });
      } catch (error) {
        dispatch({type: actions.setMessage, payload: 'Não foi possível solicitar uma nova senha. Por favor, tente novamente!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
        dispatch({type: actions.showAlert, payload: true });
      } finally {
        dispatch({type: actions.toggleLoading});
      }
    }
  }, [checkRequiredField, stop])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%">
          <ButtonReturn text="Voltar" onPress={() => navigation.navigate("Acessar Conta")}/>
          <TitleRow text="Esqueci Minha Senha" />
            <FormItemInput
              required={true}
              placeholder="E-mail"
              defaultValue={credential.email ?? null}
              onChangeText={text => setCredential({ ...credential, email: text})}
              // iconName='account'
            />
            <Spacer />
            <ButtonRow
              disabled={state.loading}
              text="Solicitar Nova Senha"
              onPress={() => handleConfirmButton()}
              // iconName="check"
            />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EsqueciMinhaSenha;