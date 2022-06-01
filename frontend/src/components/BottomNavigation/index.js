import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Label } from './styled';
import { EmailIcon } from '../ReactVectorIcons/Fontawesome';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const BottomNav = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#ffe175' }}>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Início')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#084594' }}>
            <Icon name='home' size={25}/>
          </Text>
          <Label>Início</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Minhas Viagens')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#084594' }}>
            <Icon name='backpack' size={25}/>
          </Text>
          <Label>Viagens</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Desejos')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#084594' }}>
            <Icon name='redeem' size={25}/>
          </Text>
          <Label>Desejos</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Meu Perfil')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#084594' }}>
            <Icon name='person' size={25}/>
          </Text>
          <Label>Perfil</Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};