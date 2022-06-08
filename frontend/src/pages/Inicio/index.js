import React, { useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { BottomNav } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ContainerViagem } from './ContainerViagem';
import { ContainerConquistaInicio } from './ContainerConquista';
import { UserContext } from '../../UseContext/UserContext';

const Inicio = ({ navigation }) => {

  const {user, SetUser, travel, SetTravel, travels, SetTravels, flagTravel} = useContext(UserContext);
  //const dispatch = useDispatch();

  useEffect(()=>{
    try {
      console.log(user)
      SetTravels()
      } catch (error) {
        console.log("err")
      }
    },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%" height={0.4}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, textAlign: "center", color: "#084594"}}>
                Bem-vindo
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: "center",
                  color: "#084594",
                  marginLeft: 4
                }}
              >
                {
                user.name
                }
              </Text>
            </View>
            <Spacer />
            <ContainerViagem
              nextTravel={travel}
              flagTravel={flagTravel}
              navigation={navigation}>
            </ContainerViagem>
            <Spacer />
            <ContainerConquistaInicio 
              title="Minhas Conquistas" 
              travel={2}
              country={2}
              // travel={user.conquest.qtdTravel} 
              // country={user.conquest.qtdCountry}
              onPress={() => navigation.navigate('Minhas Conquistas')} 
            />
          </Card>
        </Container>
        </ScrollView>
        <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Inicio;