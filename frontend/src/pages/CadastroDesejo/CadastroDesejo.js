import React, { useState, useCallback, useReducer, useContext, useEffect } from 'react';
import { Alert, TitleRow, FormItemInput, ButtonRow, BottomNav, ButtonReturnYellow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions/';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';
import { UserContext } from '../../UseContext/UserContext';

const CadastroDesejo = ({navigation}) => {

    const {context} = useContext(UserContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [wish, setWish] = useState({
        description: '',
    });
    const [back, setBack] = useState(false);
    useEffect(() => {if (back) navigation.goBack()}, [back]);

    const checkRequiredField = useCallback(() => {
        if (wish.description === '') {
            dispatch({type: actions.setMessage, payload: 'O campo é obrigatório e deve ser preenchido para cadastrar um desejo!'});
            return dispatch({type: actions.showAlert, payload: true });
        }
        dispatch({type: actions.setMessage, payload: ''})
        return dispatch({type: actions.showAlert, payload: false });
    }, [wish.description, state]);

    const handleConfirmButton = useCallback(async () => {
        checkRequiredField();
        try {
            dispatch({type: actions.toggleLoading});
            const resp = await api.requestCreate(context.userId, 'wish', wish);
            setBack(true);
        } catch (error) {
            dispatch({type: actions.setMessage, payload: error});
            dispatch({type: actions.changeBackgroundColor, payload: '#DF6E6E' });
            dispatch({type: actions.showAlert, payload: true });
        }
        dispatch({type: actions.toggleLoading});
    }, [checkRequiredField])

    return (
        <>
        <Container bgColor="#293775">
            {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
            <ButtonReturnYellow iconName='west' onPress={() => navigation.goBack()} />
            <Card width="90%"height={0.65}>
                <TitleRow text="Adicionar Novo Desejo" />
                <FormItemInput
                    required={true}
                    placeholder="Que viagem você gostaria de fazer?"
                    defaultValue={wish.description ?? null}
                    onChangeText={text => setWish({ ...wish, description: text})}
                />
                <Spacer />
                <ButtonRow
                    text="Cadastrar"
                    onPress={() => handleConfirmButton()}
                />
            </Card>
        </Container>
        <BottomNav navigation={navigation}/>
        </>
    );
};

export default CadastroDesejo;