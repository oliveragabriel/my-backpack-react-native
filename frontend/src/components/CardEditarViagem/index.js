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
              placeholder="Título"
              autoComplete="name"
              defaultValue={trip.title ?? null}
              onChangeText={text => setTrip({ ...trip, title: text})}
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
              required={true}
              placeholder="Data de Ida"
              defaultValue={trip.departure ?? null}
              onChangeText={text => setTrip({ ...trip, departure: text})}
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
              required={true}
              placeholder="Data de Volta"
              defaultValue={trip.arrival ?? null}
              onChangeText={text => setTrip({ ...trip, arrival: text})}
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
              placeholder="Tipo"
              defaultValue={trip.type ?? null}
              onChangeText={text => setTrip({ ...trip, type: text})}
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