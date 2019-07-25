import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component {

	render(){
		return(
			<View style={styles.container}>
				<Image style={styles.logo} source={require('../images/intro.jpg')} />
				<Text style={styles.logoText}>hoşgeldiniz</Text>
			</View>
			)
	}

}


const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	logo: {
		width: 40,
		height: 70,
	},

	logoText: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	}
});