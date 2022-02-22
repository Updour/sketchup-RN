'use strict';

import React, { Component } from 'react';
import { View, ImageBackground, StatusBar, Switch, ToastAndroid } from 'react-native'
import { 
	NativeBaseProvider, Heading, AspectRatio, Image, Text, Center,HStack, Stack, Box, Divider,
	Input, FormControl, Button, Spinner
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import axios from 'axios'

const image = { uri: "https://reactjs.org/logo-og.png" };
export default class SignScreen extends Component {
	state = {
		uname: '',
		password: '',
		setCheck: false,
		setPassword: true,
		setLoading: false
	}

	_onCheckingLoginClient = async () => {
		try {
			let { uname, password } = this.state
			if (_.isEmpty(uname) || _.isEmpty(password)) return ToastAndroid.show(`Form is required!`, ToastAndroid.SHORT)
			let items = {
				uName: uname,
				pas : password
			}
			let results = await axios.post(`https://api.codev.one/login`, items)
			if (_.isEqual(results.data.status, false)) return ToastAndroid.show(results.data.msg, ToastAndroid.SHORT)
				this.setState({
					setLoading: true
				}, () => ToastAndroid.show(`Successfully Login`, ToastAndroid.SHORT))
					setTimeout(() => this.props.navigation.navigate('bottom'), 2500)
		} catch(e){
			console.log(e)
		}
	}


  render() {
  	let { navigate } = this.props.navigation
    return (
    	<ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
    	<StatusBar
        animated={true}
        backgroundColor="#000"/>
    	<NativeBaseProvider>
	    	<Center flex={1} px="3" bgColor="red">
		    	<Box
			    	width="96%"
			    	rounded="lg"
			    	overflow="hidden"
			    	borderColor="coolGray.200"
			    	borderWidth="1"
			    	rounded="lg"
			    	_dark={{ borderColor: "coolGray.600", backgroundColor: "gray.700" }}
			    	_web={{ shadow: 2, borderWidth: 0 }}
			    	_light={{ backgroundColor: "gray.50" }}
		    	>

			    	<Stack p="3" space={2}>
				    	<Stack p="3">
					    	<Heading size="xl" ml="-1">
					    		Login App
					    	</Heading>
				    	<Text fontSize="sm" >Login to your account</Text>
				    	</Stack>
			    	<Stack >
				    	<FormControl>
					    	<Stack space={5}>
						    	<Stack>
							    	<FormControl.Label>Username</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Username" 
							    	onChangeText={uname => this.setState({uname})}
							    	value={this.state.uname}
							    	InputLeftElement={
							    		<Icon name="ios-person-outline" size={17} ml="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Password</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password"
							    	onChangeText={password => this.setState({password})}
							    	value={this.state.password}
							    	secureTextEntry={this.state.setPassword}
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" 
							    		onPress={() => this.setState({setPassword: !this.state.setPassword})}/>
							    	}
							    	placeholder="Password"
							    	/>
						    	</Stack>
					    	</Stack>
				    	</FormControl>
				    <Stack p="2" space={2} flexDirection='row'>
					    <Switch
						    trackColor={{ false: "#767577", true: "#81b0ff" }}
						    thumbColor={this.state.setCheck ? "#f5dd4b" : "#f4f3f4"}
						    ios_backgroundColor="#3e3e3e"
						    onValueChange={() => this.setState({ setCheck: !this.state.setCheck })}
						    value={this.state.setCheck}
					    />
					    <Text ml="2">Remember this account</Text>
				    </Stack>
			    	</Stack>
				    	<HStack alignItems="center" space={4} justifyContent="center">
				    		{
				    			this.state.setLoading ?
				    			<View>
						    		<Spinner accessibilityLabel="Loading posts" />
							    		<Heading color="indigo.500" fontSize="md">
							    			Loading
							    		</Heading> 
					    		</View> : 
					    		<Button size="lg" borderRadius="90" w="80%" colorScheme="primary"
					    		onPress={this._onCheckingLoginClient}>SIGN IN</Button>

				    		}

				    	</HStack>
				    	<HStack alignItems="center" space={6} mt="4" justifyContent="space-between">
				    		<Text onPress={() => alert('Password')}>Forgot Password ?</Text>
				    		<Text onPress={() => navigate('sigup')}>Create Account </Text>
				    	</HStack>
			    	</Stack>
		    	</Box>
	    	</Center>
    	</NativeBaseProvider>
    	</ImageBackground>
    );
  }
}
