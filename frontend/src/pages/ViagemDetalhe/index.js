import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
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
          <Card width="90%">
            <TitleRow text="Detalhes da Viagem" />
            <ContainerViagem 
              title={trip.title}
              departure={trip.departure} 
              country={trip.country}
              navigation={navigation}
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViagemDetalhe;