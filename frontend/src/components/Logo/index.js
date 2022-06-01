import React, { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
  },
  div: {
    alignItems: 'center'
  }
});

export const Logo = () => {
   return(
    <View style={styles.div}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
    </View>
   ) 
}

