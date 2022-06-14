import React, { useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav, Loading } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerViagem } from './ContainerViagem';
import { ContainerConquistaInicio } from './ContainerConquista';
import { UserContext } from '../../UseContext/UserContext';

const Inicio = ({ navigation }) => {

    const {user, travel, travels, contextSetTravels, contextSetNextTravel, flagTravel} = useContext(UserContext);

    useEffect(()=>{
        contextSetTravels();
    },[])

    useEffect(() => {
        contextSetNextTravel();
    }, [travels]);

    const handleContent = () => {
        return (travels.loading || travel.loading) ? (<Loading/>) : (
            <Card width="90%" height={0.4}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, textAlign: "center", color: "#084594"}}>
                        Bem-vindo
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: "center",
                        color: "#084594",
                        marginLeft: 4
                    }}>
                        {user.name}
                    </Text>
                </View>
                <Spacer />
                <ContainerViagem
                    navigation={navigation}
                    nextTravel={travel}
                >
                </ContainerViagem>
                <Spacer />
                <ContainerConquistaInicio 
                    title="Minhas Conquistas" 
                    travel={user.travels} 
                    country={user.countries}
                    onPress={() => navigation.navigate('Minhas Conquistas')}
                />
            </Card>
        );
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <Container bgColor="#293775">
                    {handleContent()}
                </Container>
                </ScrollView>
                <BottomNav navigation={navigation}/>
        </SafeAreaView>
    );
};

export default Inicio;