import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import Logo from './Logo';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = { name: null, password: '' };
  }

  onPressLogin(){
    Alert.alert("ok");
  }

  render() {
    return (

      <View styles={styles.view}>
        
        <View style={styles.logo}>
            <Logo/>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>mobil eğitim</Text>
          <TextInput
            style={styles.input} placeholder="isim giriniz"
            //autoFocus = {true}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
           />

          <TextInput
            style={styles.input} placeholder="şifre giriniz"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
           />

          
          <View style={styles.buttons}>

            <TouchableOpacity  style={styles.button} onPress={this.onPressLogin} activeOpacity={0.5}>
              <Text style={styles.buttonText}>
                kayıt ol
              </Text>
           </TouchableOpacity>


            <TouchableOpacity  style={styles.button} onPress={this.onPressLogin} activeOpacity={0.5}>
              <Text style={styles.buttonText}>
                giriş yap
              </Text>
           </TouchableOpacity>

          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

   view: {    
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#fff',    
  }, 

  logo: {
    height: '30%',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'rgba(236, 100, 75, 1)',
  },

  container: {
    height: '70%',   
    alignItems: 'center',       
  },

  title: {
    margin: '3%',
    color: 'red',
    fontSize: 50,
    fontStyle: 'italic',     
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 20
  },

  input: {
    height: 40,
    width: '70%',
    margin: '2%',
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 10,
    textAlign: 'center',
  },

  buttons: {
    flexDirection:"row",

  },

  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
    margin: 15,
  },

  buttonText: {
    color: 'white',
  },

});