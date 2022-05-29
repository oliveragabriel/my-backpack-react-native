import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ComponenteDias } from './ComponenteDias/index.js';

const ListaDias = ({ navigation }) => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Card width="90%">
            <TitleRow text="Dias" />
            <ComponenteDias/>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListaDias;