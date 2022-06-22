import React, { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
import { BottomNav, ButtonRow, Loading, TitleRow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerListaDesejos } from './ContainerListaDesejos';
import * as api from '../../services/api';

const ListaDesejos = ({ navigation }) => {

    const isFocused = useIsFocused();
    const {context} = useContext(UserContext);
    const [wishes, setWishes] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetAll(context.userId, 'wish')
                .then(res => setWishes({data: res, empty: false, loading: false}))
                .catch(error => setWishes({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, [isFocused]);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !wishes.loading) setLoading(false);
        return () => {isMounted = false}
    }, [wishes]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.25}>
                <View style={{
                    width: "100%",
                }}>
                    <TitleRow text="Meus desejos" />
                    <ContainerListaDesejos navigation={navigation} wishes={wishes.data} />
                    <ButtonRow 
                        text="Adicionar desejo"
                        onPress={() => navigation.navigate('Cadastro Desejo')}
                    />
                </View>
            </Card>
        );
    };

    return (
        <>
            <Container bgColor="#293775">
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ListaDesejos;