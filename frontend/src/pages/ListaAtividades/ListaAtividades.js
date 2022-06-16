import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ComponenteListaAtividades } from './ComponenteListaAtividades';

const ListaAtividades = ({ navigation }) => {

  const { travelDay } = useContext(UserContext)

  return (
    <>
      <Container bgColor="#293775">
        <Card width="90%" height={0.3}>
        <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Dias")} />
          <View style={{
            width: "100%",
            }}>
            <TitleRow text={`Atividades do dia ${travelDay.day}`}/>
            <ComponenteListaAtividades navigation={navigation}/>
          </View>
          </Card>
        </Container>
      <BottomNav navigation={navigation}/>
    </>
    );
};

export default ListaAtividades;