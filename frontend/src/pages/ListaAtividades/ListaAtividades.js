import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { ComponenteListaAtividades } from './ComponenteListaAtividades';

const ListaAtividades = ({ navigation }) => {
  const [dia, setDia] = useState("02/07")
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.3}>
          <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Dias")} />
            <View style={{
              width: "100%",
              }}>
              <TitleRow text={`Atividades do dia ${dia}`}/>
              <ComponenteListaAtividades navigation={navigation}/>
            </View>
            </Card>
          </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
    );
};

export default ListaAtividades;