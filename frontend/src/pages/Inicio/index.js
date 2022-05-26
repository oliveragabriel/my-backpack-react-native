import React, { useState, useEffect, useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerViagem } from './ContainerViagem';
import { ContainerConquistaInicio } from './ContainerConquista';
import { UserContext } from '../../UseContext/UserContext';
import { getNextTrip, getUser } from '../../services/api';

const Inicio = ({ navigation }) => {

  const {user, SetUser, conquest, GetConquest, nextTravel, SetNextTravel, flagTravel} = useContext(UserContext);
  //const dispatch = useDispatch();

  //const [nextTrip, setNextTrip] = useState({});

  useEffect(()=>{
    try {
      SetUser()
      SetNextTravel()
      } catch (error) {
        console.log("err")
      }
    },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          <Card width="90%">
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Bem-vindo
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: "center",
                  color: "#084594",
                  marginLeft: 4
                }}
              >
                {
                user.acc_name
                }
              </Text>
            </View>
            <Spacer />
            <ContainerViagem
              nextTrip={nextTravel}
              flagTravel={flagTravel}>
            </ContainerViagem>
            <Spacer />
            <ContainerConquistaInicio 
              title="Minhas Conquistas" 
              travel={conquest.qtdTravel} 
              country={conquest.qtdCountry}
              onPress={() => navigation.navigate('Minhas Conquistas')} 
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inicio;