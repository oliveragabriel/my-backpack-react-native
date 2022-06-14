import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ComponenteDias } from './ComponenteDias/index.js';

const ListaDias = ({ navigation }) => {

  const {travelDays} = useContext(UserContext);
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.3}>
          <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Viagem Detalhe")} />
            <View style={{
              width: "100%",
              }}>
              <TitleRow text="Dias da Viagem"/>
              <ComponenteDias
                navigation={navigation}
                travelDays={travelDays.objArr}
              />
            </View>
            </Card>
          </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
    );
};

export default ListaDias;