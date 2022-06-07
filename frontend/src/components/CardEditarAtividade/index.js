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
        width: '100%',
        height:'80%',
        marginTop: 10,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#DCDCDC",
        marginBottom:20,
      }}>
        <Spacer/>
        <FormItemInput
          required={true}
          placeholder="Descrição"
          defaultValue={activity.description ?? null}
          onChangeText={text => setActivity({ ...activity, description: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Tipo (ex: Alimentação, Lazer)"
          defaultValue={activity.type ?? null}
          onChangeText={text => setActivity({ ...activity, type: text})}
        />
        <Spacer />
        <FormItemInput
          placeholder="Valor"
          defaultValue={activity.value ?? null}
          onChangeText={text => setActivity({ ...activity, value: text})}
        />
        <Spacer />
        <FormItemInput
          placeholder="Horário"
          defaultValue={activity.time ?? null}
          onChangeText={text => setActivity({ ...activity, time: text})}
        />
        <Spacer />
      </View>
  )
}
