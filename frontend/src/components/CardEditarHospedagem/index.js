import React, { useState, useCallback, useReducer } from 'react';
import { FormItemInput } from './../'
import { Spacer } from '../../styles';
import { View } from 'react-native'

export const CardEditarHospedagem = () => {

  const [accomodation, setAccomodation] = useState({
    description: '',
    type: '',
    value: 0,
    arrivalDate: "",
    departureDate: "",
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
          defaultValue={accomodation.description ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, description: text})}
          />
        <FormItemInput
          required={true}
          placeholder="Tipo (ex: Hotel, Airbnb)"
          defaultValue={accomodation.type ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, type: text})}
        />
        <FormItemInput
          required={true}
          placeholder="Valor"
          defaultValue={accomodation.value ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, value: text})}
        />
        <FormItemInput
          required={true}
          placeholder="Horário de Saída"
          defaultValue={accomodation.time ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, time: text})}
        />
        <FormItemInput
          required={true}
          placeholder="Horário de Volta"
          defaultValue={accomodation.time ?? null}
          onChangeText={text => setAccomodation({ ...accomodation, time: text})}
        />
        <Spacer />
    </View>
  )
}
