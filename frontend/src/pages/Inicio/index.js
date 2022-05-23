import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerProximaViagemInicio } from './ContainerProximaViagem';
import { ContainerConquistaInicio } from './ContainerConquista';
import { 
  useSelector, 
  //useDispatch 
} from 'react-redux'
import { getNextTrip } from '../../services/api';

const Inicio = ({ navigation }) => {

  const user = useSelector((state) => state.user);
  const conquest = useSelector((state) => state.conquest);
  //const dispatch = useDispatch();

  const [nextTrip, setNextTrip] = useState({
    title: 'Mexico Trip',
    departure: "20/05/2022",
    country: 'Mexico',
    days: 4,
    activitys: 8
  });

  useEffect(()=>{
    try {
      const trip = getNextTrip();
      setNextTrip(trip);
      console.log()
      } catch (error) {
        // criar outro componente de caso sem next trip
        nextTrip = {
          title: '',
          departure: "",
          country: '',
          days: 4,
          activitys: 8
        }
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
                {user.name}
              </Text>
            </View>
            <Spacer />
            <ContainerProximaViagemInicio 
              title="Próxima Viagem"  
              name={nextTrip.title} 
              date={nextTrip.departure} 
              country={nextTrip.country} 
              day={nextTrip.days}
              activity={nextTrip.activitys}
              onPress={() => navigation.navigate('Viagem Detalhe')}
            />
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