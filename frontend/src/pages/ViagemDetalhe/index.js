import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { ContainerViagem } from './ContainerViagem';

const ViagemDetalhe = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: 'Viagem ao mar do Caribe',
    departure: null,
    country: 'Estados Unidos da América',
    days: 0,
    activitys: 0
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.4}>
            <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Minhas Viagens")} />
            <TitleRow text="Detalhes da Viagem" />
            <ContainerViagem 
              title={trip.title}
              departure={trip.departure} 
              country={trip.country}
              navigation={navigation}
            />
            <ButtonRow 
                text="Detalhar dias da viagem" 
                onPress={() => navigation.navigate('Lista Dias')}/>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViagemDetalhe;