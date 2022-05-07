import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerProximaViagemInicio } from './ContainerProximaViagem';
import { ContainerConquistaInicio } from './ContainerConquista';

const Inicio = ({ navigation }) => {
  const [conquest, setConquest] = useState({
    qtdTravel: 0,
    qtdCountry: 0,
  });
  const [trip, setTrip] = useState({
    title: '',
    departure: null,
    country: '',
    days: 0,
    activitys: 0
  });
  const [user, setUser] = useState({
    name: '',
  });

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
              name={trip.title} 
              date={trip.departure} 
              country={trip.country} 
              day={trip.days}
              activity={trip.activitys}
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