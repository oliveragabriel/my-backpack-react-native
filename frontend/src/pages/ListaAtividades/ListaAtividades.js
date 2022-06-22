import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow, ButtonRow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ComponenteListaAtividades } from './ComponenteListaAtividades';
import * as api from '../../services/api';

const ListaAtividades = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [activities, setActivities] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetAll(stateId.travelDay, 'activity')
                .then(res => setActivities({...res, empty: false, loading: false}))
                .catch(error => setActivities({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !activities.loading) setLoading(false);
        return () => {isMounted = false}
    }, [activities]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.3}>
                <View style={{
                    width: "100%",
                    }}>
                    <TitleRow text={`Atividades`}/>
                    <ComponenteListaAtividades activities={activities} navigation={navigation}/>
                </View>
                <ButtonRow 
                    text={'Adicionar Atividade'}
                    onPress={() => navigation.navigate('Cadastrar Atividade')}
                />
            </Card>
        )
    }

    return (
        <>
            <Container bgColor="#293775">
                <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Dias")} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ListaAtividades;