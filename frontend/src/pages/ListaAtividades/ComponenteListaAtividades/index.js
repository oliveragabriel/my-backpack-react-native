import React, { useContext }from 'react';
import { UserContext } from '../../../UseContext/UserContext';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

export const ComponenteListaAtividades = ({navigation}) => {
  
  const {activities} = useContext(UserContext);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height:'80%',
        marginTop: 10,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#DCDCDC",
        marginBottom:20,
      }}>
      <View
        style={{
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#084594",
            textAlign: "center",
          }}>
          Pressione a atividade para ver seus detalhes
        </Text>
      </View>
      <View
         style={{
          position:'relative',
          height:'100%',
      }}>
        <FlatList
          style={{
            marginBottom:80,
          }}
          data={activities}
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
              onPress={() => navigation.navigate('Atividade Detalhe')}>
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
  )
}
