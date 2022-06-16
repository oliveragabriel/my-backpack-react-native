import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { BottomNav, ButtonRow, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerListaDesejos } from './ContainerListaDesejos';

const ListaDesejos = ({ navigation }) => {

  return (
    <>
      <Container bgColor="#293775">
        <Card width="90%" height={0.25}>
          <View style={{
            width: "100%",
            }}>
            <TitleRow  text="Meus desejos"/>
            <ContainerListaDesejos navigation={navigation}/>
            <ButtonRow 
              text="Adicionar desejo"
              onPress={() => navigation.navigate('Cadastro Desejo')} />
          </View>
        </Card>
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default ListaDesejos;