'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';
import { 
  NativeBaseProvider, Box, Center, Circle, Text, FormControl, Avatar,
Stack, Input, InputLeftElement
} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

const config = {  dependencies: {    "linear-gradient": require("react-native-linear-gradient").default,  },};

export default class ProfileScreen extends Component {
  render() {
    return (
      <NativeBaseProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#a855f7"
      />
      <View style={{ backgroundColor: '#efefef'}}>
      <Box bg={{
        linearGradient: {
          colors: ["purple.900", "purple.500", "indigo.800"],
          start: [0, 0],end: [2, 0],},
        }} height="270" mt='10' borderBottomLeftRadius={37} borderBottomRightRadius={37} >

        <Center>
          <Circle bg="#fff" height={107} width={{ base: 107, lg: 107 }} mt="27">
            <Avatar size="98px" source={{
          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }} />
          </Circle>
            <Text mt="13" fontSize={19} fontWeight={600} fontFamily="roboto" color="#fff">
            Selena Mage
            </Text>
            <Text fontSize={15} fontFamily="roboto" color="#fff">Tanker Profesional</Text>
          <Box flexDirection="row" mt="5">
            <Text fontSize={23} fontWeight={600} color="#fff">100.000</Text>
            <Text fontSize={15} ml="2" mt="2" mr="4" color="#fff">Bonus</Text> 
            <Text fontSize={37} top="-12" color="#fff">|</Text>
            <Text fontSize={23} fontWeight={600} ml="4" color="#fff">100.000</Text>
            <Text fontSize={15} ml="2" mt="2" color="#fff">Downline</Text>
          </Box>
        </Center>
        </Box>

         <Box bg='#fff' borderBottomLeftRadius={17} borderBottomRightRadius={17} 
        borderTopLeftRadius={17} borderTopRightRadius={17} mt={5} ml="13" mr="13">
          <FormControl>
              <Stack space={5}>
                  <Stack p='2' mt="5">
                    <FormControl.Label ml='4' >Alamat</FormControl.Label>
                    <Input variant="underlined" p={3} placeholder="Username" ml="4"
                    fontSize="16" value="PROBOLINGGO"
                    InputLeftElement={
                      <Icon name="ios-person-outline" size={23} color="#3f3f46" />
                    }
                  />
                    <FormControl.Label ml='4' mt="3">Nomor Handphone</FormControl.Label>
                    <Input variant="underlined" p={3} placeholder="Username" ml="4"
                    fontSize="16" value="+62 8223344567"
                    InputLeftElement={
                      <Icon name="ios-phone-portrait-outline" size={23} color="#3f3f46" />
                    }
                  />
                    <FormControl.Label ml='4' mt="3">Jenis Kelamin</FormControl.Label>
                    <Input variant="underlined" p={3} placeholder="Username" ml="4"
                    fontSize="16" value="Wanita"
                    InputLeftElement={
                      <Icon name="ios-person-outline" size={23} color="#3f3f46" />
                    }
                  />
                  </Stack>
              </Stack>
          </FormControl>
        </Box>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({

});
