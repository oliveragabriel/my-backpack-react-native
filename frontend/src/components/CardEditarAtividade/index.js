import React, { useState, useCallback, useReducer } from 'react';
import { FormItemInput } from './../'
import { Spacer } from '../../styles';
import { View } from 'react-native'

export const CardEditarAtividade = () => {

  const [activity, setActivity] = useState({
    description: '',
    type: '',
    value: 0,
    time: null,
  });

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
          position:'relative',
          height:'100%',
      }}>
        <FormItemInput
          required={true}
          placeholder="Descrição"
          defaultValue={activity.description ?? null}
          onChangeText={text => setActivity({ ...activity, description: text})}
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
          }}/>
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Tipo (ex: Alimentação, Lazer)"
          defaultValue={activity.type ?? null}
          onChangeText={text => setActivity({ ...activity, type: text})}
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
        />
        <Spacer />
        <FormItemInput
          placeholder="Valor"
          defaultValue={activity.value ?? null}
          onChangeText={text => setActivity({ ...activity, value: text})}
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
        />
        <Spacer />
        <FormItemInput
          placeholder="Horário"
          defaultValue={activity.time ?? null}
          onChangeText={text => setActivity({ ...activity, time: text})}
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
        />
        <Spacer />
      </View>
    </View>
  )
}
