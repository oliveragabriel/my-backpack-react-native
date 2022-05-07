import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerConquista } from './Container'

const MinhasConquistas = ({ navigation }) => {
  const [conquest, setConquest] = useState({
    qtdTravel: 0,
    qtdCountry: 0,
    qtdCity: 0,
    qtdActivity: 0,
  });

  useEffect(()=>{
   getConquest() 
  },[])

  const getConquest = useCallback(async () => {
    try {
      const resp = await instance.post('/conquest');
      setConquest(resp.data);
    } catch (error) {
      
    }
  })


  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          <Card width="90%">
          <TitleRow text="Minhas Conquistas" />
            <ContainerConquista value={`${conquest.qtdTravel}`} text={`Viagens Realizadas`}/>
            <Spacer />
            <ContainerConquista value={`${conquest.qtdCountry}`} text={`Países Visitados`}/>
            <Spacer />
            <ContainerConquista value={`${conquest.qtdCity}`} text={`Cidades Conhecidas`}/>
            <Spacer />
            <ContainerConquista value={`${conquest.qtdActivity}`} text={`Atividades Executadas`}/>
            <Spacer />
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MinhasConquistas;