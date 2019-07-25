import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import Logo from './src/pages/Logo.js';

export default class App extends Component {
	render(){
		return(
			<View style={styles.container}>
			  <Logo/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});