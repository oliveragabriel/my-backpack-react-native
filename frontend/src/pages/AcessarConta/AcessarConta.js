import React, { useState, useCallback, useReducer, useContext, useEffect} from 'react';
import { Alert, TitleRow, FormItemInput, ButtonLink, ButtonRow, Logo } from '../../components';
import { Card, Container, Spacer} from '../../styles';
import { actions } from './reducers/actions/';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api'
import { UserContext } from '../../UseContext/UserContext';
import { actionsId } from '../../UseContext/reducer/actions';

const AcessarConta = ({ navigation }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [stop, setStop] = useState('');
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const {stateId, dispatchId} = useContext(UserContext);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && state.isNext) navigation.navigate('Início');
        return () => {isMounted = false}
    }, [stateId]);

    const checkRequiredField = useCallback(() => {
        if(credentials.email === '' || credentials.password === '') {
            dispatch({type: actions.setMessage, payload: 'Os campos E-mail e Senha são obrigatórios e devem ser preenchidos para acessar para acessar!'});
            setStop('invalid');
            return dispatch({type: actions.showAlert, payload: true });
        } else {
            dispatch({type: actions.setMessage, payload: ''})
            setStop('valid');
            return dispatch({type: actions.showAlert, payload: false });
        }
    }, [credentials.email, credentials.password, state, stop]);

    const handleConfirmButton = useCallback(async () => {
        checkRequiredField();
            try {
                dispatch({type: actions.toggleLoading});
                let resp = await api.requestLoginUser(credentials);
                dispatch({type: actions.setNext});
                dispatchId({type: actionsId.setUserId, payload: resp.id});
            } catch (error) {
            console.log('Error', error);
                dispatch({type: actions.setMessage, payload: error});
                dispatch({type: actions.showAlert, payload: true });
            } finally {
                dispatch({type: actions.toggleLoading});
                setStop('');
            }
    }, [checkRequiredField, stop])

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
            setCredentials({ ...credentials, password: text })
            dispatch({type: actions.setCheckedPassword, payload: 'valid'})
        } else {
            dispatch({type: actions.setCheckedPassword, payload: 'invalid'})
        }
    }

    return (
        <>
            <Container bgColor="#293775">
                {state.alert && (
                    <Alert
                        bgColor="#DF6E6E"
                        message={state.message}
                        onPress={() => dispatch({type: actions.showAlert, payload: false })}
                    />
                )}
                <Card width="90%" height={0.25}>
                    <Logo/>
                    <TitleRow text="Acessar Conta" />
                    
                    <FormItemInput
                        required={true}
                        placeholder="E-mail"
                        autoComplete='email'
                        checked={state.checkedEmail}
                        onChangeText={(text) => handleEmail(text)}
                        iconName="email"
                    />
                    <Spacer />
                    <FormItemInput
                        required={true}
                        placeholder="Senha"
                        autoComplete='password'
                        checked={state.checkedPassword}
                        onChangeText={(text) => handlePassword(text)}
                        secureTextEntry
                        iconName="lock-outline"
                        style={{
                        //paddingTop: 10,
                        }}
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
                    />
                </Card>
            </Container>
        </>
    );
};

export default AcessarConta;