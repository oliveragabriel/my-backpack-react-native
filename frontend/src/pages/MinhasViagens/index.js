import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomNav, ButtonRow, Loading, TitleRow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerViagensAnteriores } from './ContainerViagensAnteriores';
import { ContainerProximaViagem } from './ContainerProximaViagem';

const MinhasViagens = ({ navigation }) => {

  const {travels, contextSetTravels} = useContext(UserContext);

  useEffect(() => {
    contextSetTravels();
  },[]);

  const renderContainer = () => {
    return (travels.loading) ? <Loading/> : (
      <Card width="90%" height={0.25}>
        <View style={{
          width: "100%",
        }}>
          <TitleRow  text="Minhas Viagens"/>
          <ContainerViagensAnteriores
            navigation={navigation}
            travels={travels.done}
          />
          <ContainerProximaViagem
            navigation={navigation}
            travels={travels.notDone}
          />
          <ButtonRow 
            text="Adicionar próxima viagem" 
            onPress={() => navigation.navigate('Cadastro Viagem')}
          />
        </View>
      </Card>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          {renderContainer()}
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MinhasViagens;