import React, { useEffect, useContext, useState } from 'react';
import { BottomNav, TitleRow, Loading } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerConquista } from './Container';
import { UserContext } from '../../UseContext/UserContext';
import * as api from '../../services/api';

const MinhasConquistas = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [user, setUser] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(stateId.user, 'user')
                .then(res => setUser({...res, loading: false}));
        }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !user.loading) setLoading(false);
        return () => {isMounted= false;}
    }, [user]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.25}>
                <TitleRow text="Minhas Conquistas" />
                <ContainerConquista value={`${user.travels}`} text={`Viagens Realizadas`}/>
                <Spacer />
                <ContainerConquista value={`${user.countries}`} text={`Países Visitados`}/>
                <Spacer />
                <ContainerConquista value={`${user.cities}`} text={`Cidades Conhecidas`}/>
                <Spacer />
                <ContainerConquista value={`${user.activities}`} text={`Atividades Executadas`}/>
                <Spacer />
            </Card>
        );
    };

    return (
        <>
            <Container bgColor="#293775">
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation} />
        </>
    );
};

export default MinhasConquistas;