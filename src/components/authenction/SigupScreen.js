'use strict';

import React, { Component } from 'react';
import { View, ImageBackground, StatusBar, Platform } from 'react-native'
import { 
	NativeBaseProvider, Heading, AspectRatio, Image, Text, Center,HStack, Stack, Box, Divider,
	Input, FormControl, Button, ScrollView, Select, CheckIcon
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
const image = { uri: "https://reactjs.org/logo-og.png" };

export default class SigupScreen extends Component {
	state = {
		isDateShow: false,
		valDate: new Date(Date.now()),
		setDate: '',
		setIbank: ''
	}
  render() {
    return (
    	<View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#efefef' }}>
    	<StatusBar animated={true} backgroundColor="#efefef"/>
    	<NativeBaseProvider>
	    	<Center flex={1} px="3">
		    	<Box
		    		mt="2"
		    		mb="2"
			    	rounded="lg"
			    	overflow="hidden"
			    	borderColor="coolGray.200"
			    	borderWidth="1"
			    	rounded="lg"
			    	_web={{ shadow: 2, borderWidth: 0 }}
			    	_light={{ backgroundColor: "gray.50" }}
		    	>

			    	<Stack p="3" space={2}>
				    	<Stack p="3">
					    	<Heading size="xl" ml="-1">
					    		Registrasi Aplikasi
					    	</Heading>
				    	<Text fontSize="sm">Silahkan Daftar Untuk Membeli Robot</Text>
				    	</Stack>
			   <ScrollView>

			    	<Stack>
				    	<FormControl>
					    	<Stack space={5}>
						    	<Stack>
							    	<FormControl.Label>Sponsor</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Sponsor" isRequired 
							    	InputLeftElement={
							    		<Icon name="ios-person-outline" size={17} ml="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nama Pengguna</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Alamat Email</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>NIK</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nama</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nomor HP (Whatsapp)</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password"isRequired
							    	keyboardType='phone-pad'
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Tempat Lahir</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
						    	<FormControl.Label>Tanggal Lahir</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	value={this.state.setDate} isReadOnly
							    	InputRightElement={
							    		<Icon name="calendar" size={17} mr="2" 
							    		color="orange" onPress={() => this.setState({isDateShow: true})}/>
							    	}
						    	/>
						    	{ 
						    		this.state.isDateShow ? 
						    		<DateTimePicker
							    		value={this.state.valDate}
							    		mode={'date'}
							    		display={Platform.OS === 'ios' ? 'spinner' : 'default'}
							    		is24Hour={true}
							    		onChange={e => this.setState({ 
							    			valDate: moment(e).format('DD-MM-YYYY'), 
							    			isDateShow: false,
							    		})}
							    		/> : null 
						    	}
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nama Kota</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Alamat</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>

						    	<Text textAlign='center' fontWeight='600'>DATA BANK</Text>
						    	<Stack>
							    	<FormControl.Label>Jenis Bank</FormControl.Label>
							    		<Select selectedValue={this.state.setIbank} minWidth="200" 
									    	 placeholder="Pilih Jenis Bank" isRequired
									    	_selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} 
								    			onValueChange={setIbank => this.setState({setIbank})}>
								    		<Select.Item label="UX Research" value="ux" />
								    		<Select.Item label="Web Development" value="web" />
								    		<Select.Item label="Cross Platform Development" value="cross" />
								    		<Select.Item label="UI Designing" value="ui" />
							    		</Select>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nomor Rekening</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>

						    	<Text textAlign='center' fontWeight='600'>DATA WARIS</Text>
						    	<Stack>
							    	<FormControl.Label>Hubungan</FormControl.Label>
							    		<Select selectedValue={this.state.setIbank} minWidth="200" 
									    	placeholder="Pilih Hubungan Keluarga" isRequired
									    	_selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} 
								    			onValueChange={setIbank => this.setState({setIbank})}>
								    		<Select.Item label="UX Research" value="ux" />
								    		<Select.Item label="Web Development" value="web" />
								    		<Select.Item label="Cross Platform Development" value="cross" />
								    		<Select.Item label="UI Designing" value="ui" />
							    		</Select>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nama Ahli Waris</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>
						    	<Stack>
							    	<FormControl.Label>Nomor HP Ahli Waris</FormControl.Label>
							    	<Input variant="underlined" p={2} placeholder="Password" isRequired
							    	keyboardType='phone-pad'
							    	InputRightElement={
							    		<Icon name="lock-closed-outline" size={17} mr="2" color="orange" />
							    	}
							    	/>
						    	</Stack>


						    	<Text textAlign='center' fontWeight='600'>DATA PAKET</Text>
						    	<Stack>
							    	<FormControl.Label>Paket Join</FormControl.Label>
							    		<Select selectedValue={this.state.setIbank} minWidth="200" 
									    	 placeholder="Pilih Paket" isRequired
									    	_selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} 
								    			onValueChange={setIbank => this.setState({setIbank})}>
								    		<Select.Item label="UX Research" value="ux" />
								    		<Select.Item label="Web Development" value="web" />
								    		<Select.Item label="Cross Platform Development" value="cross" />
								    		<Select.Item label="UI Designing" value="ui" />
							    		</Select>
						    	</Stack>
					    	</Stack>
				    	</FormControl>
			    	</Stack>
					</ScrollView>

				    	<HStack alignItems="center" space={4} justifyContent="center">
				    		<Button size="lg" borderRadius="90" w="80%" colorScheme="primary"
				    		onPress={() => this.props.navigation.navigate('Bottom')}>REGISTER</Button>
				    	</HStack>
				    	<HStack alignItems="center" space={6} mt="4" justifyContent="space-between">
				    		<Text onPress={() => this.props.navigation.navigate('sign')}>Sudah punya akun ?</Text>
				    	</HStack>
			    	</Stack>
		    	</Box>
	    	</Center>
    	</NativeBaseProvider>
    	</View>
    );
  }
}
