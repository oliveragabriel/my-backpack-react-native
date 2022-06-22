import React, { useState, useCallback, useReducer, useEffect } from 'react';
import { View } from 'react-native';
import { Alert, TitleRow, ButtonRow, BottomNav, ButtonReturnYellow, Loading, FormItemInput } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';

const EditarAtividade = ({ navigation, route }) => {

    const id = route.params.id;
    const [state, dispatch] = useReducer(reducer, initialState);
    const [activity, setActivity] = useState({loading: true})
    const [loading, setLoading] = useState(true);
    const [back, setBack] = useState(false);
    useEffect(() => {if (back) navigation.goBack()}, [back]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(id, 'activity')
                .then(res => {
                    setActivity({...res, empty: false, loading: false})
                })
                .catch(error => setActivity({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !activity.loading) setLoading(false);
        return () => {isMounted = false}
    }, [activity]);

    const checkRequiredField = useCallback(() => {
        if(activity.description === '' || activity.type === '') {
        dispatch({type: actions.setMessage, payload: 'Os campos Descrição e Tipo são obrigatórios e devem ser preenchidos para cadastrar!'});
        return dispatch({type: actions.showAlert, payload: true });
        }
        dispatch({type: actions.setMessage, payload: ''});
        return dispatch({type: actions.showAlert, payload: false });
    }, [activity.description, activity.type, activity.value, activity.time, state]);

    const handleConfirmButton = useCallback(async () => {
        checkRequiredField();
        try {
            dispatch({type: actions.toggleLoading});
            const data = {
                description: activity.description,
                type: activity.type,
                value: activity.value,
                time: activity.time
            };
            await api.requestUpdate(id, 'activity', data);
            setBack(true);
        } catch (error) {
            dispatch({type: actions.showAlert, payload: true });
            dispatch({type: actions.setMessage, payload: 'A atividade não pode ser atualizada, tente novamente!'});
            console.log(error);
        }
    }, [checkRequiredField])

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.3}>
                <TitleRow text="Editar Atividade" />
                <View style={{
                    width: "100%",
                }}>
                    <View
                        style={{
                            width: '100%',
                            height:'80%',
                            marginTop: 10,
                            backgroundColor: 'whitesmoke',
                            borderWidth: 1,
                            borderRadius: 6,
                            borderColor: "#DCDCDC",
                            marginBottom:20,
                        }}
                    >
                        <Spacer/>
                        <FormItemInput
                            required={true}
                            placeholder="Descrição"
                            defaultValue={activity.description ?? null}
                            onChangeText={text => setActivity({ ...activity, description: text})}
                        />
                        <Spacer />
                        <FormItemInput
                            required={true}
                            placeholder="Tipo (ex: Alimentação, Lazer)"
                            defaultValue={activity.type ?? null}
                            onChangeText={text => setActivity({ ...activity, type: text})}
                        />
                        <Spacer />
                        <FormItemInput
                            placeholder="Valor"
                            defaultValue={activity.value ? activity.value.toString() : null}
                            onChangeText={text => setActivity({ ...activity, value: text})}
                        />
                        <Spacer />
                        <FormItemInput
                            placeholder="Horário"
                            defaultValue={activity.time ?? null}
                            onChangeText={text => setActivity({ ...activity, time: text})}
                        />
                        <Spacer />
                    </View>
                    <ButtonRow
                        text="Alterar"
                        onPress={() => handleConfirmButton()}
                    />
                </View>
            </Card>
        );
    };

    return (
        <>
            <Container bgColor="#293775">
                {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
                <ButtonReturnYellow 
                    marginBottom={10}
                    iconName='west' 
                    onPress={() => navigation.goBack()}
                />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default EditarAtividade;