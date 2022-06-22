import React, { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
import { BottomNav, ButtonRow, Loading, TitleRow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerViagensAnteriores } from './ContainerViagensAnteriores';
import { ContainerProximaViagem } from './ContainerProximaViagem';
import * as api from '../../services/api';

const MinhasViagens = ({ navigation }) => {

    const isFocused = useIsFocused();
    const {context} = useContext(UserContext);
    const [travels, setTravels] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetAll(context.userId, 'travel')
                .then(res => setTravels({data: res, empty: false, loading: false}))
                .catch(error => setTravels({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, [isFocused]);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !travels.loading) setLoading(false);
        return () => {isMounted = false}
    }, [travels]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.25}>
                <View style={{
                    width: "100%",
                }}>
                <TitleRow  text="Minhas Viagens"/>
                <ContainerViagensAnteriores
                    navigation={navigation}
                    travels={travels.data?.done ?? []}
                />
                <ContainerProximaViagem
                    navigation={navigation}
                    travels={travels.data?.notDone ?? []}
                />
                <ButtonRow 
                    text="Adicionar próxima viagem" 
                    onPress={() => navigation.navigate('Cadastro Viagem')}
                />
                </View>
            </Card>
        )
    }

    return (
        <>
        <Container bgColor="#293775">
            {handleContent()}
        </Container>
        <BottomNav navigation={navigation}/>
        </>
    );
};

export default MinhasViagens;