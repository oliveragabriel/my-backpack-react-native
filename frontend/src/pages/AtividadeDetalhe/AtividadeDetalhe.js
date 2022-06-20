import React, { useContext, useEffect, useState } from 'react';
import { BottomNav, TitleRow, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerAtividade } from './ContainerAtividade';
import * as api from '../../services/api';

const AtividadeDetalhe = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [activity, setActivity] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetOne(stateId.activity, 'activity')
                .then(res => setActivity({...res, empty: false, loading: false}))
                .catch(error => setActivity({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !activity.loading) setLoading(false);
        return () => {isMounted= false;}
    }, [activity]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.5}>
                <TitleRow text="Detalhes da Atividade" />
                <ContainerAtividade 
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
                <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Atividades")} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default AtividadeDetalhe;