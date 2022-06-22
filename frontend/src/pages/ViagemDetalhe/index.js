import React, { useEffect, useState, useReducer } from 'react';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow, Loading, Alert } from '../../components';
import { Card, Container } from '../../styles';
import { ContainerViagem } from './ContainerViagem';
import * as api from '../../services/api';
import { actions } from './reducers/actions';
import { initialState, reducer } from './reducers/reducer';

const ViagemDetalhe = ({ navigation, route }) => {

    const id = route.params.id;
    const [travel, setTravel] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    const [state, dispatch] = useReducer(reducer, initialState);
    const [back, setBack] = useState(false);
    useEffect(() => {if (back) navigation.goBack();}, [back]);
  
    const handleDeleteTravel = async () => {
      try {
        await api.requestDelete(travel.id, 'travel');
        dispatch({type: actions.setMessage, payload: 'Viagem deletada com sucesso!'});
        dispatch({type: actions.changeBackgroundColor, payload: '#58CE7E' });
        dispatch({type: actions.showAlert, payload: true });
        setTimeout(function() { setBack(true); }, 2000);
      } catch (error) {
        dispatch({type: actions.showAlert, payload: true });
        dispatch({type: actions.setMessage, payload: 'A viagem não pode ser deletada, tente novamente!'});
        console.log(error)
      }
    }
  
    const handleDeleteButton = () => {
      handleDeleteTravel();
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(id, 'travel')
                .then(res => setTravel({...res, empty: false, loading: false}))
                .catch(error => setTravel({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !travel.loading) setLoading(false);
        return () => {isMounted = false}
    }, [travel]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.4}>
                <TitleRow text="Detalhes da Viagem" />
                <ContainerViagem 
                    handleDeleteButton={handleDeleteButton}
                    travel={travel}
                    navigation={navigation}
                    dispatch={dispatch}
                    state={state}
                />
                <ButtonRow 
                    text="Detalhar dias da viagem" 
                    onPress={() => {
                        navigation.navigate('Lista Dias', {id: id});
                    }}
                />
            </Card>
        )
    }

    return (
        <>
            <Container bgColor="#293775">
                {state.alert && (<Alert bgColor={state.backgroundColor} message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
                <ButtonReturnYellow iconName='west' onPress={() => navigation.goBack()} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ViagemDetalhe;