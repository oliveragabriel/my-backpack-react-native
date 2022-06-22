import React, { useState, useCallback, useReducer, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Alert, TitleRow, FormItemInput, BottomNav, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';
import * as api from '../../services/api';

const EditarViagem = ({ navigation, route }) => {

    const id = route.params.id;
    const [state, dispatch] = useReducer(reducer, initialState);
    const [trip, setTrip] = useState({loading: true});
    const [loading, setLoading] = useState(true);
    const [back, setBack] = useState(false);
    useEffect(() => {if (back) navigation.goBack()}, [back]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(id, 'travel')
                .then(res => {
                  res.departureDate = fromDateTimeToDate(res.departureDate)
                  res.arrivalDate = fromDateTimeToDate(res.arrivalDate)
                  setTrip({...res, empty: false, loading: false})
              })
                .catch(error => setTrip({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !trip.loading) setLoading(false);
        return () => {isMounted = false}
    }, [trip]);

    const checkRequiredField = useCallback(() => {
        if(trip.title === '' || trip.departureDate === '' || trip.arrivalDate === '') {
        dispatch({type: actions.setMessage, payload: 'Os campos com * são obrigatórios e devem ser preenchidos para alterar sua viagem!'});
        return dispatch({type: actions.showAlert, payload: true });
        }
        dispatch({type: actions.setMessage, payload: ''})
        return dispatch({type: actions.showAlert, payload: false });
    }, [trip.title, trip.departureDate, trip.arrivalDate, trip.type, state]);

    const FormatDate = (date) => {
        var dia  = date.split("/")[0];
        var mes  = date.split("/")[1];
        var ano  = date.split("/")[2];
        return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    }

    const fromDateTimeToDate = (date) => {
      const newDate = new Date(date)
      const result = newDate.toISOString().slice(0,10);
      return result.split("-").reverse().join("/");
    }

    const handleUpdateTravel = async (data) => {
        try {
            await api.requestUpdate(trip.id, 'travel', data);
            setBack(true);
        } catch (error) {
            dispatch({type: actions.showAlert, payload: true });
            dispatch({type: actions.setMessage, payload: 'A viagem não pode ser atualizada, tente novamente!'});
            console.log(error);
        }
    }

    const handleConfirmButton = useCallback(() => {
        checkRequiredField();
        dispatch({type: actions.toggleLoading});
        handleUpdateTravel({
            title: trip.title,
            type: trip.type,
            arrivalDate: FormatDate(trip.arrivalDate),
            departureDate: FormatDate(trip.departureDate)
        });
    }, [checkRequiredField]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.3}>
                <TitleRow text="Editar Viagem" 
                    height={40} />
                    <Spacer />
                <FormItemInput
                    required={true}
                    placeholder="Título"
                    autoComplete="name"
                    defaultValue={trip.title ?? null}
                    onChangeText={text => setTrip({ ...trip, title: text})}
                />
                <Spacer />
                <FormItemInput
                    required={true}
                    placeholder="Data de Ida"
                    defaultValue={trip.departureDate ?? null}
                    onChangeText={text => setTrip({ ...trip, departureDate: text})}
                />
                <Spacer />
                <FormItemInput
                    required={true}
                    placeholder="Data de Volta"
                    defaultValue={trip.arrivalDate ?? null}
                    onChangeText={text => setTrip({ ...trip, arrivalDate: text})}
                />
                <Spacer />
                <FormItemInput
                    placeholder="Tipo"
                    defaultValue={trip.type ?? null}
                    onChangeText={text => setTrip({ ...trip, type: text})}
                />
                <Spacer />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#4FCF78',
                            width: '33%',
                            height: 40,
                            padding: 6,
                            borderRadius: 6,
                        }}
                        onPress={handleConfirmButton}
                        >
                        <Text
                            style={{
                            fontSize: 14,
                            fontWeight: "600",
                            }} 
                        >
                                Alterar              
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#008E89',
                            height: 40,
                            width: '33%',
                            padding: 6,
                            borderRadius: 6,
                        }}
                        onPress={() => navigation.navigate('Editar Hospedagem')}
                        >
                        <Text
                            style={{
                            fontSize: 14,
                            fontWeight: "600",
                            }} 
                        >
                                Hospedagem              
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#008E89',
                            height: 40,
                            width: '33%',
                            padding: 6,
                            borderRadius: 6,
                        }}
                        onPress={() => navigation.navigate('Editar Transporte')}
                        >
                        <Text
                            style={{
                            fontSize: 14,
                            fontWeight: "600",
                            }} 
                        >
                            Transporte
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    };


    return (
        <>
            <Container bgColor="#293775">
                {state.alert && (<Alert message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
                <ButtonReturnYellow
                    iconName='west' 
                    onPress={() => navigation.goBack()}
                />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default EditarViagem;