import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, ButtonReturn, Logo } from '../../components';
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
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop('valid');
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [credential.email, state, stop]);

  const handleConfirmButton = useCallback(async () => {
    checkRequiredField();
    if (stop === 'valid') {
      try {
        dispatch({type: actions.toggleLoading});
        await instance.post('/resetpassword', credential)
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

  const handleEmail = (text) => {
    if(text !== '') {
      setCredential({ ...credential, email: text })
      dispatch({type: actions.setCheckedEmail, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedEmail, payload: 'invalid'})
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
          <Card width="90%">
          <ButtonReturn iconName='west' onPress={() => navigation.navigate("Acessar Conta")}/>
          <Logo/>
          <TitleRow text="Esqueci Minha Senha" />
            <FormItemInput
              required={true}
              placeholder="E-mail"
              defaultValue={credential.email ?? null}
              checked={state.checkedEmail}
              onChangeText={(text) => handleEmail(text)}
              iconName='email'
            />
            <Spacer />
            <ButtonRow
              disabled={state.loading}
              text="Solicitar Nova Senha"
              onPress={() => handleConfirmButton()}
            />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EsqueciMinhaSenha;