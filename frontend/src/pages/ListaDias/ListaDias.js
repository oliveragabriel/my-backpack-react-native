import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BottomNav, TitleRow } from '../../components';
import { Card, Container, Spacer } from '../../styles';
import { ComponenteDias } from './ComponenteDias/index.js';

const ListaDias = ({ navigation }) => {

  const [listaDias, setListaDias] = useState([{
    name: "01/03"
  }, {
    name: "02/03"
  }])
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Container bgColor="#293775">
          <Card width="90%">
            <View>

              <TitleRow  text="Dias da Viagem"/>

              <FlatList
                  data={listaDias}
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
                      {/* <IconeMais/> */}
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
              onPress = {navigation.navigate('Meu Perfil')}>
                <Text 
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: "center",
                  color: "#084594",
                  marginLeft: 4
                }}>
                  Adicionar Dia na Viagem
                </Text>
              </TouchableOpacity>
            </Card>
          </Container>
        <BottomNav navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
    );
};

export default ListaDias;