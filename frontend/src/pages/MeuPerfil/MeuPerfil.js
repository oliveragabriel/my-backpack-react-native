import React, { useState, useCallback, useReducer, useContext, useEffect } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, Logo } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import { UserContext } from '../../UseContext/UserContext';
import * as api from '../../services/api'

const MeuPerfil = ({ navigation }) => {

  const {context, resetContext} = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted && !context.isSet) navigation.navigate("Acessar Conta");
    return () => {isMounted = false}
  }, [context]);

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

  const checkRequiredField = useCallback(() => {
    if(user.name === '' || user.email === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Nome e E-mail são obrigatórios e devem ser preenchidos para editar seu usuário!'});
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop('valid');
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [user.name, user.email, state, stop]);

  const handleConfirmButton = useCallback(async() => {
      checkRequiredField();
        try {
          dispatch({type: actions.toggleLoading});
          const resp = await api.requestUpdate(context.userId, 'user', user);
          dispatch({type: actions.setMessage, payload: 'Cadastro atualizado com sucesso!'});
          dispatch({type: actions.showAlert, payload: true });
          dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
          return resp;
        } catch (error) {
          console.log(error, "erro")
          dispatch({type: actions.setMessage, payload: responseValid});
          dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
          dispatch({type: actions.showAlert, payload: true });  
          return error;
        } finally {
          dispatch({type: actions.toggleLoading});
          setStop('');
        }
  }, [checkRequiredField, stop])

  const handleDeleteButton = async () => {
    try {
      const resp = await api.requestDelete(context.userId, 'user');
      dispatch({type: actions.setMessage, payload: resp});
      dispatch({type: actions.showAlert, payload: true });
      dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
      setTimeout(function() { handleLogout(); }, 2000);
    } catch (error) {
      dispatch({type: actions.setMessage, payload: "Não foi possível deletar a conta, tente novamente!"});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      dispatch({type: actions.showAlert, payload: true });  
    }
  };

  const handleLogout = () => {
    resetContext();
  };

  return (
    <>
      <Container bgColor="#293775">
        {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <Card width="90%" height={0.3}>
        <TitleRow text="Meu Perfil" />
          <FormItemInput
            required={true}
            placeholder="Nome"
            autoComplete="name"
            checked={state.checkedName}
            onChangeText={text => handleName(text)}
            iconName='person'
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="E-mail"
            checked={state.checkedEmail}
            autoComplete='email'
            onChangeText={text => handleEmail(text)}
            iconName='email'
          />
          <Spacer />
          <ButtonRow
            text="Alterar"
            onPress={() => handleConfirmButton()}
          />
          <ButtonRow
            text="Configurar Senha"
            onPress={() => navigation.navigate('Alterar Senha')}
          />
          <ButtonRow
            text="Deslogar Usuário"
            onPress={() => handleLogout()}
          />
          <ButtonRow
            text="Excluir Conta"
            onPress={() => handleDeleteButton()}
            backgroundColor='#DF6E6E'
          />
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default MeuPerfil;