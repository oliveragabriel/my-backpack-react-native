import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Label } from './styled';

export const BottomNav = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#694FAD' }}>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Início')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>?</Text>
          <Label>Início</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Viagens')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>?</Text>
          <Label>Viagens</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Desejos')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>?</Text>
          <Label>Desejos</Label>
        </TouchableOpacity>
      </View>
      <View style={{ width: '25%' }}>
        <TouchableOpacity style={{ padding: 6 }} onPress={() => {navigation.navigate('Meu Perfil')}}>
          <Text style={{ padding: 3, textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>?</Text>
          <Label>Perfil</Label>
        </TouchableOpacity>
      </View>
    </View>
  );
};