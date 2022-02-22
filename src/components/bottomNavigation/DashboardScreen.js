'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import { 
  Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Tooltip, Button,
  Pressable, Avatar, VStack, Spacer, Flex, ScrollView
} from 'native-base'
import _ from 'lodash'
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconF from 'react-native-vector-icons/FontAwesome5'

import val from './downline.json'

const config = {  dependencies: {    "linear-gradient": require("react-native-linear-gradient").default,  },};
export default class DashboardScreen extends Component {
    state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              img: require('../../assets/test.jpg')
          },
          {
              title:"Item 2",
              text: "Text 2",
              img: require('../../assets/test.jpg')
          },
          {
              title:"Item 3",
              text: "Text 3",
              img: require('../../assets/test.jpg')
          },
          {
              title:"Item 4",
              text: "Text 4",
              img: require('../../assets/login.jpg')
          },
          {
              title:"Item 5",
              text: "Text 5",
              img: require('../../assets/test.jpg')
          },
        ],
        data: val.data,
        isEmpty: false
    }
      _renderItem({item,index}){
        return (
          <View style={{ marginLeft: 17, marginRight: 17 }}>
             <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" h={10} ratio={16 / 9}>
          <Image
            source={item.img}
            alt="image"
            style={{ height: 80 }}
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1" color="#fff">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center 
        </Text>
      </Stack>
    </Box>
    </View>

        )
    } 
  render() {
    return (
      <NativeBaseProvider config={config}>
      <StatusBar animated={true} backgroundColor="#581c87" />
      <View style={styles.carousel}>
        <Carousel
          loop={true}
          loopClonesPerSide={5}
          autoplay={true}
          lockScrollWhileSnapping={true}
          enableMomentum ={true}
          autoplayDelay={2000}
          autoplayInterval={2500}
          inactiveSlideScale={1}
          activeSlideAlignment={'start'}
          inactiveSlideOpacity={1}
          inactiveSlideShift={0.6}
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={350}
          itemWidth={330}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({activeIndex:index}) } 
        />
      </View>

      
      <View style={styles.bg}>
        <Flex direction="row">
              <Box bg={{
                linearGradient: {
                  colors: ["teal.100", "teal.400"],
                  start: [0, 2],end: [0, 0],},
                }} p={4} rounded="lg" shadow="5" m="2" width="45%" height="93"
              _text={{ fontSize: "md", fontFamily: 'roboto', color: "white" }}>
                  Total Bonus
                <Text style={styles.txt}>
                <IconF name="award" size={21} color='#fff'/>
                100.000</Text>
              </Box>
            <Spacer />
             <Box bg={{
                linearGradient: {
                  colors: ["lightBlue.100", "lightBlue.400"],
                  start: [0, 2],end: [0, 0],},
                }} p={4} rounded="lg" shadow="5" m="2" width="45%" height="93"
              _text={{ fontSize: "md", fontFamily: 'roboto', color: "white" }}>
                Total Downline
                <Text style={styles.txt}>
                  <IconM name="account-details-outline" size={22} color='#fff'/>
                100.000</Text>
              </Box>
          </Flex>
      </View>
      
          <ScrollView mt="-195" bg="white" ml="3" mr="3" borderRadius="12">
            <Flex direction="row">
              <Heading fontSize="xl" mr="90" p="4" pb="3">
                Recently Downline
              </Heading>
              <Text fontSize="sm" p="4" pb="3" color="blue.400" textAlign="right">
                View All
              </Text>
            </Flex>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.uid.toString()}
              renderItem={({ item }) => (
                <Box borderBottomWidth="1" borderColor="coolGray.100"
                _dark={{ borderColor: "gray.600",}} pl="4" pr="5" py="2"
                >
                  <HStack space={3} justifyContent="space-between" mt="1">
                    {
                       _.isEqual(item.type, 'gold') && 
                       <Avatar bg="#fbbf24" size="md" shadow="8">
                          <IconM name="account-details-outline" size={23} color='#fff'/>
                        </Avatar>
                    }
                    {
                       _.isEqual(item.type, 'silver') && 
                       <Avatar bg="#aaa8af" size="md" shadow="8">
                          <IconM name="account-details-outline" size={23} color='#fff'/>
                        </Avatar>
                    }
                    {
                       _.isEqual(item.type, 'platinum') && 
                       <Avatar bg="lightBlue.500" size="md" shadow="8">
                          <IconM name="account-details-outline" size={23} color='#fff'/>
                        </Avatar>
                    }
                    <VStack >
                      <Text _dark={{ color: "warmGray.50" }} color="coolGray.900" bold >
                      {_.toUpper(item.username)}
                      </Text>
                      <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                      {item.date}
                      </Text>
                    </VStack>
                  <Spacer />
                  {
                    _.isEqual(item.type, 'gold') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#fbbf24', fontWeight: '700' }}>
                      {_.toUpper(item.type)}
                    </Text>
                  }
                  {
                    _.isEqual(item.type, 'silver') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#aaa8af', fontWeight: '700' }}>
                      {_.toUpper(item.type)}
                    </Text>
                  }
                  {
                    _.isEqual(item.type, 'platinum') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#0ea5e9', fontWeight: '700' }}>
                      {_.toUpper(item.type)}
                    </Text>
                  }
                  </HStack>
                </Box>
                )}
            />
            </ScrollView>

      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  carousel: { 
    flexDirection:'row', 
    backgroundColor: '#efefef', 
    marginTop: 14
  },
  txt: {
    padding: 3,
    fontSize: 25,
    bottom: -7,
    fontWeight: '700',
    fontFamily: 'roboto',
    color: '#fff'
  },
  bg: {
    width: '94%',
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 12,
    marginBottom: '50%',
    marginLeft: 12,
    marginRight: 4,
    borderRadius: 13,
    shadow: 4,
  },
});
