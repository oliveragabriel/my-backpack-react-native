import React, { useState, useCallback, useReducer } from 'react';
import { FormItemInput } from './../'
import { Spacer } from '../../styles';
import { View } from 'react-native'

export const CardEditarViagem = () => {

  const [trip, setTrip] = useState({
    title: '',
    departure: null,
    arrival: null,
    type: '',
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
        <Spacer />
          <FormItemInput
              required={true}
              placeholder="Título"
              autoComplete="name"
              defaultValue={trip.title ?? null}
              onChangeText={text => setTrip({ ...trip, title: text})}
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Data de Ida"
              defaultValue={trip.departure ?? null}
              onChangeText={text => setTrip({ ...trip, departure: text})}
            />
            <Spacer />
            <FormItemInput
              required={true}
              placeholder="Data de Volta"
              defaultValue={trip.arrival ?? null}
              onChangeText={text => setTrip({ ...trip, arrival: text})}
            />
            <Spacer />
            <FormItemInput
              placeholder="Tipo"
              defaultValue={trip.type ?? null}
              onChangeText={text => setTrip({ ...trip, type: text})}
            />
            <Spacer />
        </View>
  )
}