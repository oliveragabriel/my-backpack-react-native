import React, { useContext, useState } from 'react';
import { UserContext } from '../../UseContext/UserContext';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { ContainerAtividade } from './ContainerAtividade';

const AtividadeDetalhe = ({ navigation }) => {

  const {activity, travelDay} = useContext(UserContext)

  return (
    <>
      <Container bgColor="#293775">
        <Card width="90%" height={0.3}>
        <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Lista Atividades")} />
          <TitleRow text="Detalhes da Atividade" />
          <ContainerAtividade 
            country={travelDay.country}
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
    </>
  );
};

export default AtividadeDetalhe;