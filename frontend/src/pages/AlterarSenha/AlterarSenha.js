import React, { useState, useReducer, useCallback, useContext } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Container, Card, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';
import { UserContext } from '../../UseContext/UserContext';

const AlterarSenha = ({ navigation }) => {
  
  const {context} = useContext(UserContext);
  const [stop, setStop] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [token, setToken] = useState({
    password: '',
    confirm: '',
  });
  const [back, setBack] = useState(false);
  useEffect(() => {if (back) navigation.goBack()}, [back]);

  const checkRequiredField = useCallback(() => {
    if(token.password === '' || token.confirm === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos Senha e Confirmar Senha são obrigatórios e devem ser preenchidos para alterar!'});
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    }
    if(token.password !== token.confirm) {
      dispatch({type: actions.setMessage, payload: 'A Senha e a Confirmação devem ser iguais. Por favor, preencha o mesmo valor nos dois campos!'});
      setStop('invalid');
      return dispatch({type: actions.showAlert, payload: true });
    }
    dispatch({type: actions.setMessage, payload: ''})
    setStop('valid');
    return dispatch({type: actions.showAlert, payload: false });
  }, [token.password, token.confirm, state, stop]);

  const handleConfirmButton = useCallback(async () => {
    checkRequiredField();
    if (stop === 'valid') {
      try {
        dispatch({type: actions.toggleLoading});
        const resp = await api.requestUpdate(context.userId, 'user', {password: token.password});
        setBack(true);
      } catch (error) {
        dispatch({type: actions.setMessage, payload: error});
        dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
        dispatch({type: actions.showAlert, payload: true });
      } finally {
        dispatch({type: actions.toggleLoading});
        setStop('');
      }
    }
  }, [checkRequiredField, stop]);

  return (
    <>
      <Container bgColor="#293775">
        {state?.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
        <ButtonReturnYellow iconName='west' onPress={() => navigation.goBack()} />
        <Card width="90%" height={0.6}>
          <TitleRow text="Alterar Senha" />
          <FormItemInput
            required={true}
            placeholder="Senha"
            autoComplete='password'
            onChangeText={(text) => setToken({ ...token, password: text })}
            secureTextEntry
            iconName="lock-outline"
          />
          <Spacer />
          <FormItemInput
            required={true}
            placeholder="Confirme sua Nova Senha"
            onChangeText={(text) => setToken({ ...token, confirm: text })}
            secureTextEntry
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