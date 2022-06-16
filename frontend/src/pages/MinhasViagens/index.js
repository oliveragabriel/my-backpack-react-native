import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomNav, ButtonRow, TitleRow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ContainerViagensAnteriores } from './ContainerViagensAnteriores';
import { ContainerProximaViagem } from './ContainerProximaViagem';

const MinhasViagens = ({ navigation }) => {

  const {travels, contextSetTravels} = useContext(UserContext);

  useEffect(() => {
    contextSetTravels()
  },[]);

  return (
    <>
      <Container bgColor="#293775">
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
      </Container>
      <BottomNav navigation={navigation}/>
    </>
  );
};

export default MinhasViagens;