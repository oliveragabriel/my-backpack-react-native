import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import {ContainerProximaViagem} from './ContainerProximaViagem'
import {ContainerViagensAnteriores} from './ContainerViagensAnteriores'  

const MinhasViagens = ({ navigation }) => {
  
  const {nextTravel} = useContext(UserContext)

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Card width="90%">
            <TitleRow text="Próxima Viagem" />
            <ContainerProximaViagem
              nextTravel={nextTravel}
            //onPress={() => navigation.navigate('Viagem Detalhe')}
            />
          </Card>
          <Spacer/>
          <Card width="90%">
            <TitleRow text="Viagens Anteriores" />
            <ContainerViagensAnteriores
              //onPress={() => navigation.navigate('Viagem Detalhe')}
            />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MinhasViagens;