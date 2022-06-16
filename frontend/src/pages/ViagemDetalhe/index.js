import React, { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { BottomNav, TitleRow, ButtonRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerViagem } from './ContainerViagem';

const ViagemDetalhe = ({ navigation }) => {

  const {travel, contextSetTravelDays} = useContext(UserContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Minhas Viagens")} />
          <Card width="90%" height={0.4}>
            <TitleRow text="Detalhes da Viagem" />
            <ContainerViagem 
              travel={travel}
              navigation={navigation}
            />
            <ButtonRow 
                text="Detalhar dias da viagem" 
                onPress={async () => {
                  await contextSetTravelDays(travel.id);
                  navigation.navigate('Lista Dias');
                }}/>
          </Card>
        </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViagemDetalhe;