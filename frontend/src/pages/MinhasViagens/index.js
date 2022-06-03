import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { BottomNav, ButtonRow, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerProximaViagem } from './ContainerProximaViagem';

const MinhasViagens = ({ navigation }) => {


  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.4}>
            <View style={{
              width: "100%",
              }}>
              <TitleRow  text="Minhas Viagens"/>
              <ContainerProximaViagem/>
              <ContainerProximaViagem/>
              <ButtonRow/>
            </View>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MinhasViagens;