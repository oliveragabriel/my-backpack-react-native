import React, { useState, useCallback, useReducer, useEffect } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, Logo, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';


const CadastroUsuario = ({ navigation }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [back, setBack] = useState(false);
  useEffect(() => {if (back) navigation.goBack()}, [back]);

  const checkRequiredField = useCallback(() => {
    if(user.name === '' || user.email === '' || user.password === '' || user.confirm === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para cadastrar um novo usuário!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    } else if(user.password !== user.confirm) {
      dispatch({type: actions.setMessage, payload: 'A Senha e a Confirmação devem ser iguais. Por favor, preencha o mesmo valor nos dois campos!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop('valid');
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [user.name, user.email, user.password, user.confirm, state, stop]);
 
  const handleConfirmButton = useCallback(async () => {
    checkRequiredField();
    if (stop === 'valid') {
      try {
        dispatch({type: actions.toggleLoading});
        const resp = await api.requestCreateUser(user);
        dispatch({type: actions.setMessage, payload: resp});
        dispatch({type: actions.showAlert, payload: true });
        dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
        setTimeout(function() { setBack(true); }, 3000);
      } catch (error) {
        dispatch({type: actions.setMessage, payload: error});
        dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
        dispatch({type: actions.showAlert, payload: true });
      } finally {
        dispatch({type: actions.toggleLoading});
        setStop('');
      }
    }
  }, [checkRequiredField, stop])

  const handleName = (text) => {
    if(text !== '') {
      setUser({ ...user, name: text});
      dispatch({type: actions.setCheckedName, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedName, payload: 'invalid'})
    }
  }

  const handleEmail = (text) => {
    const regexEmail = (/\S+@\S+\.\S+/);
    const condition = regexEmail.test(text); 
    if(condition) {
      setUser({ ...user, email: text})
      dispatch({type: actions.setCheckedEmail, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedEmail, payload: 'invalid'})
    }
  }

  const handlePassword = (text) => {
    // Ao menos uma letra minuscula, uma maiuscula, um caracter especial, um número
    const regexPassword =  (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{3,}$/) ;
    const condition = regexPassword.test(text); 
    if(condition) {
      setUser({ ...user, password: text});
      dispatch({type: actions.setCheckedPassword, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedPassword, payload: 'invalid'})
    }
  }

  const handleConfirmPassowrd = (text) => {
    if(text === user.password) {
      setUser({ ...user, confirm: text});
      dispatch({type: actions.setCheckedConfirmPassword, payload: 'valid'})
    } else {
      dispatch({type: actions.setCheckedConfirmPassword, payload: 'invalid'})                }
  }

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <ButtonReturnYellow iconName='west' onPress={() => navigation.goBack()} />
        <Card width="90%" height={0.3}>
        <Logo/>
        <TitleRow text="Cadastro de Usuário" />
          <FormItemInput
            required={true}
            placeholder="Nome"
            autoComplete="name"
            checked={state.checkedName}
            onChangeText={(text) => handleName(text)}
            iconName='person'
          />
          <Spacer height={20} />
          <FormItemInput
            required={true}
            checked={state.checkedEmail}
            placeholder="E-mail"
            autoComplete='email'
            onChangeText={(text) => handleEmail(text)}
            iconName="email"
          />
          <Spacer height={20} />
          <FormItemInput
            required={true}
            placeholder="Senha"
            autoComplete='password'
            checked={state.checkedPassword}
            onChangeText={(text) => handlePassword(text)}
            secureTextEntry
            iconName="lock-outline"
          />
          <Spacer height={20} />
          <FormItemInput
            required={true}
            placeholder="Confirmar Senha"
            checked={state.checkedConfirmPassword}
            onChangeText={(text) => handleConfirmPassowrd(text)}
            secureTextEntry
            iconName="lock-outline"
          />
          <Spacer height={20} />
          <ButtonRow
            disabled={state.loading}
            text="Cadastrar"
            onPress={() => handleConfirmButton()}
          />
        </Card>
      </Container>
    </>
  );
};

export default CadastroUsuario;