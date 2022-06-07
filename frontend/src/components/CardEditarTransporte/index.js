import React, { useState, useCallback, useReducer } from 'react';
import { FormItemInput } from './../'
import { Spacer } from '../../styles';
import { View } from 'react-native'

export const CardEditarTransporte = () => {

  const [transport, setTransport] = useState({
    description: '',
    type: '',
    value: 0,
    arrivalDate: "",
    departureDate: "",
    arrivalPlace: "",
    departurePlace: "",
  });

  return (
    <View
      style={{
        width: '100%',
        height:'90%',
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
          defaultValue={transport.description ?? null}
          onChangeText={text => setTransport({ ...transport, description: text})}
          />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Tipo (ex: Alimentação, Lazer)"
          defaultValue={transport.type ?? null}
          onChangeText={text => setTransport({ ...transport, type: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Valor"
          defaultValue={transport.value ?? null}
          onChangeText={text => setTransport({ ...transport, value: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Horário de Saída"
          defaultValue={transport.time ?? null}
          onChangeText={text => setTransport({ ...transport, time: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Lugar de Saída"
          defaultValue={transport.time ?? null}
          onChangeText={text => setTransport({ ...transport, time: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Horário de Volta"
          defaultValue={transport.time ?? null}
          onChangeText={text => setTransport({ ...transport, time: text})}
        />
        <Spacer />
        <FormItemInput
          required={true}
          placeholder="Destino"
          defaultValue={transport.time ?? null}
          onChangeText={text => setTransport({ ...transport, time: text})}
        />
        <Spacer />
    </View>
  )
}
