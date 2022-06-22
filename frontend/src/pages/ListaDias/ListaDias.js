import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow, Loading } from '../../components';
import { Card, Container } from '../../styles';
import { ComponenteDias } from './ComponenteDias';
import * as api from '../../services/api';

const ListaDias = ({ navigation, route }) => {

    const id = route.params.id;
    const [travelDays, setTravelDays] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) { handleSetTravels() }
        return () => {isMounted = false};
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !travelDays.loading) setLoading(false);
        return () => {isMounted = false}
    }, [travelDays]);

    const handleSetTravels = () => {
        api.requestGetAll(id, 'travelDay')
            .then((res) => {
                setTravelDays({data: res, empty: false, loading: false})
            })
            .catch(error => setTravelDays({empty: true, loading: false}));
    }

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.3}>
                <View style={{width: "100%"}}>
                    <TitleRow text="Dias da Viagem"/>
                    <ComponenteDias
                        navigation={navigation}
                        travelDays={travelDays.data}
                    />
                </View>
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

export default ListaDias;