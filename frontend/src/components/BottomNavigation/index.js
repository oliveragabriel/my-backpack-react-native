import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Label } from './styled';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'
import {HomeAlt} from '@styled-icons/boxicons-regular/HomeAlt'
import {Backpack} from '@styled-icons/fluentui-system-filled/Backpack'
import {Bucket} from '@styled-icons/bootstrap/Bucket'
import {User} from '@styled-icons/boxicons-regular/User'

export const BottomNav = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#694FAD' }}>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Início')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>
            {/*ERRO <HomeAlt/> */}
            ?
          </Text>
          <Label>Início</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Minhas Viagens')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>
            {/*ERRO <Backpack/> */}
            ?
          </Text>
          <Label>Viagens</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Desejos')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>
            {/*ERRO <Bucket/> */}
            ?
          </Text>
          <Label>Desejos</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Meu Perfil')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>
            {/*ERRO <User/> */}  
            ?
          </Text>
          <Label>Perfil</Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};