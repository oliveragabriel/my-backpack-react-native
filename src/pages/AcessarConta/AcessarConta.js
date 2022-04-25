import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonLink, ButtonRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
// import instance from '../../services/api'

const AcessarConta = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const checkRequiredField = useCallback(() => {
    if(credentials.email === '' || credentials.password === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos E-mail e Senha são obrigatórios e devem ser preenchidos para acessar para acessar!'});
      setStop(true);
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop(false);
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [credentials.login, credentials.password, state, stop]);

  const handleConfirmButton = useCallback(async () => {
      checkRequiredField();
      if (stop === false) {
        // try {
        //   dispatch({type: actions.toggleLoading});
        //   await instance.post('/sessions', credentials).then(
        //     (resp) => {
              // console.log('Response', resp.data);
              navigation.navigate('Início');
        //     }
        //   )
        // } catch (error) {
          // console.log('Error', error)
      //     dispatch({type: actions.setMessage, payload: 'O E-mail e a Senha não correspondem a um usuário válido. Por favor, tente novamente!'});
      //     dispatch({type: actions.showAlert, payload: true });
      //   } finally {
      //     dispatch({type: actions.toggleLoading});
      //     setStop(null);
      //   }
      }
  }, [checkRequiredField, stop])

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
              onChangeText={text => setCredentials({ ...credentials, email: text })}
              // iconName="account"
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Senha"
              autoComplete='password'
              onChangeText={text => setCredentials({ ...credentials, password: text })}
              // secureTextEntry
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