import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { UserContext } from '../../UseContext/UserContext';

const MinhasViagens = ({ navigation }) => {
  

  const [travels, setTravels] = useState([{
    name: "Viagem 1"
  }, {
    name: "Viagem 2"
  }])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%">
            <View>

              <TitleRow  text="Minhas Viagens"/>

              <FlatList
                  data={travels}
                  renderItem={({item}) => 
                  <View>
                    <TouchableOpacity
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: "100%",
                        marginTop: 10,
                        padding: 8,
                        backgroundColor: 'whitesmoke',
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: "#DCDCDC",
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          textAlign: "center",
                          color: "#084594",
                          marginLeft: 4
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>}
                />

              </View>
              <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
                marginTop: 10,
                padding: 8,
                backgroundColor: 'whitesmoke',
                borderWidth: 1,
                borderRadius: 6,
                borderColor: "#DCDCDC",
              }}
                onPress = {navigation.navigate('Editar Viagem')}>
                <Text 
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: "center",
                  color: "#084594",
                  marginLeft: 4
                }}>
                  Adicionar Viagem
                </Text>
              </TouchableOpacity>
            </Card>
          </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MinhasViagens;