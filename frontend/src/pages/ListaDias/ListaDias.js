import React, { useContext } from 'react';
import { View } from 'react-native';
import { BottomNav, TitleRow, ButtonReturnYellow } from '../../components';
import { Card, Container } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';
import { ComponenteDias } from './ComponenteDias/index.js';

const ListaDias = ({ navigation }) => {

  const {travelDays} = useContext(UserContext);
  
  return (
    <>
      <Container bgColor="#293775">
        <ButtonReturnYellow iconName='west' onPress={() => navigation.navigate("Viagem Detalhe")} />
        <Card width="90%" height={0.3}>
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
    </>
    );
};

export default ListaDias;