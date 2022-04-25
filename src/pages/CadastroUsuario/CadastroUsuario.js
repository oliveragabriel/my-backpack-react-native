import React, { useState, useCallback, useReducer } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Alert, TitleRow, FormItemInput, ButtonRow, ButtonReturn } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import instance from '../../services/api';

const CadastroUsuario = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState();
  const [user, setUser] = useState({
    name: '',
    checkedName: null,
    birth: null,
    gender: '',
    email: '',
    checkedEmail: null,
    password: '',
    checkedPassword: null,
    confirm: '',
    checkedConfirm: null,
  });

  const checkRequiredField = useCallback(() => {
    if(user.name === '' || user.email === '' || user.password === '' || user.confirm === '') {
      dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para cadastrar um novo usuário!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      setStop(true);
      return dispatch({type: actions.showAlert, payload: true });
    } else if(user.password !== user.confirm) {
      dispatch({type: actions.setMessage, payload: 'A Senha e a Confirmação devem ser iguais. Por favor, preencha o mesmo valor nos dois campos!'});
      dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
      setStop(true);
      return dispatch({type: actions.showAlert, payload: true });
    } else {
      dispatch({type: actions.setMessage, payload: ''})
      setStop(false);
      return dispatch({type: actions.showAlert, payload: false });
    }
  }, [user.name, user.email, user.password, user.confirm, state, stop]);

  const handleConfirmButton = useCallback(async () => {
    checkRequiredField();
    if (stop === false) {
      try {
        dispatch({type: actions.toggleLoading});
        await instance.post('/users', user).then(
          () => {
            dispatch({type: actions.setMessage, payload: 'Usuário cadastrado com sucesso!'});
            dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
            dispatch({type: actions.showAlert, payload: true });
          }
        )
      } catch (error) {
        dispatch({type: actions.setMessage, payload: 'Não foi possível cadastrar o usuário. Por favor, tente novamente!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
        dispatch({type: actions.showAlert, payload: true });
      } finally {
        dispatch({type: actions.toggleLoading});
        setStop(null);
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
          <TitleRow text="Cadastro de Usuário" />
            <FormItemInput
              required={true}
              placeholder="Nome"
              autoComplete="name"
              defaultValue={user.name ?? null}
              onChangeText={text => setUser({ ...user, name: text})}
              // iconName='account'
            />
            <Spacer />
            <FormItemInput
              placeholder="Data de Nascimento (DD/MM/AAAA)"
              autoComplete='birthdate-full'
              value={user.birth}
              keyboardType="number-pad"
              maxLength={10}
              defaultValue={user.birth ?? null}
              onChangeText={text => {
                let value = "";
                value = text.replace(/\D/g, "");
                value = text.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");
                setUser({ ...user, birth: value})
              }}
            />
            <Spacer />
            <FormItemInput
              placeholder="Sexo"
              defaultValue={user.gender ?? null}
              autoComplete='gender'
              onChangeText={text => setUser({ ...user, gender: text})}
            />
            <Spacer />
            <FormItemInput
              required={true}
              checked={state.checked}
              placeholder="E-mail"
              defaultValue={user.email ?? null}
              autoComplete='email'
              onChangeText={text => {
                const regexEmail = (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
                const condition = regexEmail.test(text); 
                if(condition === true) {
                  setUser({ ...user, email: text, checkedEmail: true})
                } else {
                  setUser({ ...user, checkedEmail: false})
                }
              }}
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Senha"
              autoComplete='password'
              checked={user.checkedPassword}
              onChangeText={text => {
                const regexPassword =  (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{3,}$/) ;
                const condition = regexPassword.test(text); 
                if(condition === true) {
                  setUser({ ...user, password: text, checkedPassword: true});
                } else {
                  setUser({ ...user, checkedPassword: false});
                }
              }}
              secureTextEntry
              // iconName="lock-outline"
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Confirmar Senha"
              checked={user.checkedPassword}
              onChangeText={text => {
                if(text === user.password) {
                  setUser({ ...user, confirm: text, checkedConfirm: true});
                } else {
                  setUser({ ...user, checkedConfirm: false});
                }
              }}
              secureTextEntry
              // iconName="lock-outline"
            />
            <Spacer />
            <ButtonRow
              disabled={state.loading}
              text="Cadastrar"
              onPress={() => handleConfirmButton()}
              // iconName="check"
            />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CadastroUsuario;