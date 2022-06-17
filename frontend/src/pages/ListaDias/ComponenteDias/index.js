import React, { useContext, useState }from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { UserContext } from '../../../UseContext/UserContext';

export const ComponenteDias = ({navigation, travelDays, travelDate}) => {

  const {activities, contextSetActivities} = useContext(UserContext);

  const handleActivitiesButton = async (id) => {
    await contextSetActivities(id);
    //console.log(activities)
    navigation.navigate('Lista Atividades');
    }

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
          Pressione o dia para detalhar suas atividades
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
          data={travelDays}
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
              onPress={() => handleActivitiesButton(item.id)}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: "center",
                  color: "#084594",
                  marginLeft: 4
                }}
              >{item.day}
              </Text>
            </TouchableOpacity>
          }/>
      </View> 
    </View>
  )
}
