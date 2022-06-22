import React, { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { BottomNav, TitleRow, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { ContainerAtividade } from './ContainerAtividade';
import * as api from '../../services/api';

const AtividadeDetalhe = ({ navigation, route }) => {

    const isFocused = useIsFocused();
    const id = route.params.id;
    const [activity, setActivity] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(id, 'activity')
                .then(res => setActivity({...res, empty: false, loading: false}))
                .catch(error => setActivity({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, [isFocused]);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !activity.loading) setLoading(false);
        return () => {isMounted = false}
    }, [activity]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.5}>
                <TitleRow text="Detalhes da Atividade" />
                <ContainerAtividade
                    id={id}
                    description={activity.description}
                    value={activity.value} 
                    type={activity.type}
                    time={activity.time}
                    navigation={navigation}
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

export default AtividadeDetalhe;