import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { BottomNav, Loading } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerViagem } from './ContainerViagem';
import { ContainerConquistaInicio } from './ContainerConquista';
import { UserContext } from '../../UseContext/UserContext';
import * as api from '../../services/api';

const Inicio = ({ navigation }) => {

    const {stateId, dispatchId} = useContext(UserContext);
    const [user, setUser] = useState({loading: true});
    const [next, setNext] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          handleSetUser()
          console.log(stateId.user)
          handleSetNextTravels()
        }
        return () => {isMounted = false};
    }, []);


    useEffect(() => {
        let isMounted = true;
        if (isMounted && !user.loading && !next.loading) setLoading(false);
        return () => {isMounted= false;}
    }, [user, next]);

    const handleSetUser = () => {
      api.requestGetOne(stateId.user, 'user')
      .then((res) => {
      setUser({...res, empty: false, loading: false})
      })
      .catch(error => setUser({empty: true, loading: false}));
   }

    const handleSetNextTravels = () => {
      api.requestGetNext(stateId.user)
      .then((res) => {
      setNext({...res, empty: false, loading: false})
      })
      .catch(error => setNext({empty: true, loading: false}));
   }

    const handleContent = () => {
        return (loading) ? (<Loading/>) : (
            <Card width="90%" height={0.4}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, textAlign: "center", color: "#084594"}}>
                        Bem-vindo(a)
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
                    nextTravel={next}
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
        <>
            <Container bgColor="#293775">
                {handleContent()}
            </Container>
            <BottomNav navigation={navigation} />
        </>
    );
};

export default Inicio;