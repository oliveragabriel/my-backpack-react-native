import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow, ButtonRow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { ComponenteListaAtividades } from './ComponenteListaAtividades';
import * as api from '../../services/api';

const ListaAtividades = ({ navigation, route }) => {

    const isFocused = useIsFocused();
    const id = route.params.id;
    const day = route.params.day;
    const [activities, setActivities] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetAll(id, 'activity')
                .then(res => setActivities({data: res, empty: false, loading: false}))
                .catch(error => setActivities({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, [isFocused]);

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
                    <TitleRow text={`Atividades do dia ${day}`}/>
                    <ComponenteListaAtividades activities={activities.data} navigation={navigation}/>
                </View>
                <ButtonRow 
                    text={'Adicionar Atividade'}
                    onPress={() => navigation.navigate('Cadastrar Atividade', {id: id})}
                />
            </Card>
        )
    }

    return (
        <>
            <Container bgColor="#293775">
                <ButtonReturnYellow iconName='west' onPress={() => navigation.goBack()} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ListaAtividades;