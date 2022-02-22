'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import { 
  Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Tooltip, Button,
  Pressable, Avatar, VStack, Spacer, ScrollView, Flex
} from 'native-base'
import _ from 'lodash'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconN from 'react-native-vector-icons/MaterialIcons'
import MenuTabView from './propsComponent/tabViewMenu'

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
        data: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fullName: "GROSS",
          arrow: "Rp 400.000",
          recentText: "Untuk apa?",
          avatarUrl: "box-cutter-off",
          color: 'danger.500',
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fullName: "PAJAK",
          arrow: "Rp 200.000",
          recentText: "Cheer up, there!",
          avatarUrl: "bank-transfer-in",
          color: 'secondary.400',
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fullName: "NET.",
          arrow: "Rp 350.000",
          recentText: "Good Day!",
          avatarUrl: "chart-donut",
          color: 'info.400',
        },
        {
          id: "68694a0f-3da1-431f-bd56-142371e29d72",
          fullName: "REORDER",
          arrow: "Rp 90.000",
          recentText: "All the best",
          avatarUrl: "repeat",
          color: 'warning.400',
        },
        ]
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
      <NativeBaseProvider>
      <View style={styles.carousel}>
        <Carousel
          loop={true}
          loopClonesPerSide={5}
          autoplay={true}
          lockScrollWhileSnapping={true}
          enableMomentum ={true}
          autoplayDelay={3000}
          autoplayInterval={2000}
          inactiveSlideScale={1}
          activeSlideAlignment={'start'}
          inactiveSlideOpacity={1}
          inactiveSlideShift={0.6}
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({activeIndex:index}) } 
        />
      </View>

      
      <View style={styles.bg}>
        <View style={styles.cardStyles}>
         <HStack space={3} alignItems="center">
         <Pressable
         onPress={() => alert('asd')}
         >
          <Box bg="primary.100" ml='2' mr='12' mt='1' h='70' w='135' borderRadius={13} shadow={3}>
            <Text style={styles.txtCard}>Total Downline</Text>
              <View style={styles.itemWrap}>
                <Text style={styles.txtItems}>10000</Text>
                <Text style={styles.txtItemd}>.Anggota</Text>
              </View> 
          </Box>
        </Pressable>
          <Box bg="primary.100" ml='2' mr='12' mt='1' h='70' w='135' borderRadius={13} shadow={3}>
            <Text style={styles.txtCard}>Total Bonus</Text>
              <View style={styles.itemWrap}>
                <Text style={styles.txtItemd}>Rp.</Text>
                <Text style={styles.txtItems}>10000</Text>
            </View> 
          </Box>
          </HStack>
        </View>
      </View>

        <View style={styles.bgg}>
          <Flex direction="row">
            <Heading fontSize="xl" p="4" pb="3">
            Recently Downline
            </Heading>
            <Text fontSize="sm" p="4" pb="3" color="blue.400">
            View All
            </Text>
          </Flex>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Box borderBottomWidth="1" borderColor="coolGray.100"
                _dark={{ borderColor: "gray.600",}} pl="4" pr="5" py="2"
                >
                  <HStack space={4} justifyContent="space-between" borderColor="red">
                    <Avatar bg={item.color} size="md" shadow="8">
                    <IconM name={item.avatarUrl} size={25} color='#fff'/>
                    </Avatar>
                    <VStack onPress={() => alert('asdas')}>
                  <Pressable onPress={() => alert('test')}>
                      <Text _dark={{ color: "warmGray.50" }} color="coolGray.900" mt="1" bold >
                      {item.fullName}
                      </Text>
                      <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                      {item.recentText}
                      </Text>
                  </Pressable>
                    </VStack>
                  <Spacer />
                  {
                    _.isEqual(item.fullName, 'GROSS') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#ef4444', fontWeight: '700' }}>{item.arrow}</Text>
                  }
                  {
                    _.isEqual(item.fullName, 'PAJAK') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#10b981', fontWeight: '700' }}>{item.arrow}</Text>
                  }
                  {
                    _.isEqual(item.fullName, 'NET.') &&
                    <Text style={{ fontSize: 17, bottom: -18, color: '#6366f1', fontWeight: '700' }}>{item.arrow}</Text>
                  }
                  {
                    _.isEqual(item.fullName, 'REORDER') &&
                    <Text style={{ 
                      textAlign: 'left', fontSize: 17, bottom: -18, color: '#0284c7', fontWeight: '700' }}>{item.arrow}</Text>
                  }
                  
                  
                  </HStack>
                </Box>
                )}
            />
          </View>
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
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'monospace'
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
  bgg: {
    width: '94%',
    backgroundColor: '#fff',
    padding: 4,
    top: -200,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 4,
    borderRadius: 13,
    shadow: 4,
  },
  cardStyles: {
    marginLeft: 6,
    marginRight: 6,
    height: 100,
    borderRadius: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: 'center',
    backgroundColor: '#faffff',
  },
  txtCard: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12,
    color: '#595959',
    fontFamily: 'roboto',
  },
  itemWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txtItems: {
    marginTop: 6,
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'center',
    color: 'red',
    fontFamily: 'roboto',
    fontFamily: '700'
  },
  txtItemd: {
    marginLeft: 12,
    marginTop: 3,
    fontSize: 10,
    color: 'red',
    textAlign: 'center',
    fontFamily: 'roboto',
  }
});
