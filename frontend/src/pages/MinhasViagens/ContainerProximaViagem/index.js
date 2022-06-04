import React, { useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { ButtonRow } from '../../../components';

export const ContainerProximaViagem = ({ 
  travels, 
  navigation,
}) => {

  const [travelsEx, setTravels] = useState([{
    name: "Viagem 1"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }, {
    name: "Viagem 2"
  }])

    return (

      <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height:'40%',
        marginTop: 10,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#DCDCDC",
        marginBottom:20,
      }}
    >
      <View
        style={{
          margin: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#084594",
            textAlign: "center",
            textTransform: "uppercase",
          }}
          >
          Próximas Viagens
        </Text>
      </View>
      <View
         style={{
          position:'relative',
          height:'100%'
        }}>
            <FlatList
                style={{
                  //GAMBIARRA
                  marginBottom:80,
                }}
                data={travelsEx}
                renderItem={({item}) => 
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: "90%",
                      alignSelf: 'center',
                      marginTop: 10,
                      padding: 8,
                      backgroundColor: '#FFFFFF',
                      borderWidth: 1,
                      borderRadius: 6,
                      borderColor: "#DCDCDC",
                    }}
                    onPress={() => navigation.navigate('Viagem Detalhe')}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: "center",
                        color: "#084594",
                        marginLeft: 4
                      }}
                    >{item.name}
                    </Text>
                  </TouchableOpacity>
                }/>
          </View> 
    </View>
)}


/* <View>
            <FlatList
                data={travelsEx}
                renderItem={({item}) => 
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
                    >{item.name}
                    </Text>
                  </TouchableOpacity>
                }/>
          </View> */