import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ComponenteDias } from './ComponenteDias';
import * as api from '../../services/api';

const ListaDias = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [travelDays, setTravelDays] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            api.requestGetAll(stateId.travel, 'travelDay')
                .then(res => setTravelDays({...res, empty: false, loading: false}))
                .catch(error => setTravelDays({empty: true, loading: false}));
        }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !travelDays.loading) setLoading(false);
        return () => {isMounted = false}
    }, [travelDays]);

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.3}>
                <View style={{width: "100%"}}>
                    <TitleRow text="Dias da Viagem"/>
                    <ComponenteDias
                        navigation={navigation}
                        travelDays={travelDays}
                    />
                </View>
            </Card>
        )
    }

    return (
        <>
            <Container bgColor="#293775">
                <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Viagem Detalhe")} />
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation}/>
        </>
    );
};

export default ListaDias;