import React, { useContext, useEffect, useState } from 'react';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerViagem } from './ContainerViagem';
import * as api from '../../services/api';

const ViagemDetalhe = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [travel, setTravel] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(stateId.travel, 'travel')
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
                    travel={travel}
                    navigation={navigation}
                />
                <ButtonRow 
                    text="Detalhar dias da viagem" 
                    onPress={async () => {
                        await contextSetTravelDays(travel.id);
                        navigation.navigate('Lista Dias');
                    }}
                />
            </Card>
        )
    }

    return (
        <>
            <Container bgColor="#293775">
                <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Minhas Viagens")} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ViagemDetalhe;