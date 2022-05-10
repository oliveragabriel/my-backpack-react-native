import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { BottomNav, TitleRow, Alert } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerConquista } from './Container';
import { 
  useSelector, 
  //useDispatch 
} from 'react-redux';

const MinhasConquistas = ({ navigation }) => {
  const conquest = useSelector((state) => state.conquest);
  //const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#085E7D">
          {state.alert && (<Alert bgColor="#DF6E6E" message={state.message} onPress={() => dispatch({type: actions.showAlert, payload: false })} />)}
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