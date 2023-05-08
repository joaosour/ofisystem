import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';

export default function Login() {

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [IsFocusedInput3, setIsFocusedInput3] = useState(false)
  const [IsFocusedInput4, setIsFocusedInput4] = useState(false)

  const handleFocusInput1 = () => {
    setIsFocusedInput1(true);
  }
  const handleBlurInput1 = () => {
    setIsFocusedInput1(false);
  }
  const handleFocusInput2 = () => {
    setIsFocusedInput2(true);
  }
  const handleBlurInput2 = () => {
    setIsFocusedInput2(false);
  }
  const handleFocusInput3 = () => {
    setIsFocusedInput3(true);
  }
  const handleBlurInput3 = () => {
    setIsFocusedInput3(false);
  }
  const handleFocusInput4 = () => {
    setIsFocusedInput4(true);
  }
  const handleBlurInput4 = () => {
    setIsFocusedInput4(false);
  }

  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle3 = IsFocusedInput3? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle4 = IsFocusedInput4? styles.inputContainerFocused : styles.inputContainer;

 return (
   <View style = {styles.container}>
          <Animatable.Image style={styles.containerLogo}
            source={require('../../assets/ofisystem_text_top.png')}
          />

        <Animatable.View
        animation="slideInUp"
        style={styles.containerForm}
        easing={'ease-out-back'}
        duration={1000}
        direction='alternate'
>
        
          <View style={styles.smallLine}></View>
          <Text style={styles.title}>Cadastrar usuário!</Text>
          <Text style={styles.text}>Insira os dados do novo usuário abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.inputTitle}>Usuário</Text>
            <View style={inputStyle1}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='Digite seu usuário'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput1}
                onBlur={handleBlurInput1} 
                />

            </View>

          <Text style={styles.inputTitle}>Senha</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2} 
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            
            
          <TouchableOpacity style = {styles.button} >
            <Text style = {styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <View style={styles.registerOptions}>
            <TouchableOpacity>
              <Text style={styles.registerOptionsText}>Esqueceu senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigation.navigate('Register')}>
              <Text style={styles.registerOptionsText}>Registrar</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </Animatable.View>
        
          <View style={styles.navigationBar}>
          
          </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1238',
  },

  containerLogo: {
    width: 190,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 21,
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  
  inputContainer: {
    flex: 1,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    flexDirection: 'row',


  },
  inputContainerFocused: {
    flex: 1,
    marginLeft: 30,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 30,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,

  },

  logoIcon: {
    marginTop: 10,
    marginBottom: 10,
    width: 90,
    height: 90,
    alignSelf: 'center'
  },

  smallLine: {
    width: 40,
    height: 7,
    alignSelf: 'center',
    backgroundColor: '#1D1238',
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 15,
  },

  title: {
    fontSize: 19,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: 2,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center'
  },

  inputTitle: {
    fontSize: 14,
    color: '#3E3E3E',
    fontWeight: '900', 
    marginTop: 0,
    marginBottom: 8,
    marginLeft: 30,

  },

  inputImage: {
    height: 20,
    width: 20,
    resizeMode: 'center',
  },
  
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'red',
  },

  text: {
    fontSize: 12,
    color: '#8C8C8C',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#1D1238',
    height: 50,
    fontSize: 16,
    marginTop: 15,
    marginBottom: 7,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonText: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold'
  },

  registerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: '6%',

  },

  registerOptionsText: {
    fontWeight: '900',

  },

})