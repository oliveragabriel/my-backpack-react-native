import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { ContainerAtividade } from './ContainerAtividade';

const AtividadeDetalhe = ({ navigation }) => {
  const [activity, setActivity] = useState({
    country: 'EUA',
    description: 'Museu Nacional',
    value: 30,
    type: 'Lazer',
    time: 0,
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.3}>
          <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Atividades")} />
            <TitleRow text="Detalhes da Atividade" />
            <ContainerAtividade 
              country={activity.country}
              description={activity.description}
              value={activity.value} 
              type={activity.type}
              time={activity.time}
              navigation={navigation}
            />
            <ButtonRow 
                text="Atividade" 
                onPress={() => navigation.navigate('')}/>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AtividadeDetalhe;