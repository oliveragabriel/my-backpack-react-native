import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonLink, ButtonRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import {getAuth} from '../../services/api'

const AcessarConta = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    acc_password: ''
  });

  const checkRequiredField = useCallback(() => {
    if(credentials.email === '' || credentials.acc_password === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos E-mail e Senha são obrigatórios e devem ser preenchidos para acessar para acessar!'});
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop('valid');
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [credentials.login, credentials.acc_password, state, stop]);

  const handleConfirmButton = useCallback(() => {
      checkRequiredField();
      // if (stop === 'valid') {
        try {
          dispatch({type: actions.toggleLoading});
          let token = getAuth(credentials)
          
          navigation.navigate('Início');
        } catch (error) {
          console.log('Error', error)
          dispatch({type: actions.setMessage, payload: 'O E-mail e a Senha não correspondem a um usuário válido. Por favor, tente novamente!'});
          dispatch({type: actions.showAlert, payload: true });
        } finally {
          dispatch({type: actions.toggleLoading});
          setStop('');
        }
     // }
  }, [checkRequiredField, stop])

  // passar p/ usecallback
  const handleEmail = (text) => {
    if(text !== '') {
      setCredentials({ ...credentials, email: text })
      dispatch({type: actions.setCheckedEmail, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedEmail, payload: 'invalid'})
    }
  }

  const handlePassword = (text) => {
    if(text !== '') {
      setCredentials({ ...credentials, acc_password: text })
      dispatch({type: actions.setCheckedPassword, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedPassword, payload: 'invalid'})
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          {state.alert && (<Alert bgColor="#DF6E6E" message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%">
            <TitleRow text="Acessar Conta" />
            <FormItemInput
              required={true}
              placeholder="E-mail"
              autoComplete='email'
              checked={state.checkedEmail}
              onChangeText={(text) => handleEmail(text)}
              // iconName="account"
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Senha"
              autoComplete='password'
              checked={state.checkedPassword}
              onChangeText={(text) => handlePassword(text)}
              secureTextEntry
              // iconName="lock-outline"
            />
            <Container direction border="none">
            <ButtonLink 
              text="Criar Nova Conta"
              onPress={() => navigation.navigate('Cadastro de Usuário')}
              />
            <ButtonLink
              text="Esqueci Minha Senha"
              onPress={() => navigation.navigate('Esqueci Minha Senha')}
              />
            </Container>
            <ButtonRow
              disabled={state.loading}
              text="Entrar"
              onPress={() => handleConfirmButton()}
              // iconName="check"
            />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcessarConta;