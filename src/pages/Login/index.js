import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import config from '../../../config/config.json';

export default function Login() {

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)

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
  const [display, setDisplay]=useState('none');
  const [user, setUser]=useState(null);
  const [password, setPassword]=useState(null);
  const [login, setLogin]=useState(null);

  //Envio do formulário de login para backend

  async function sendForm()
  {
    
    let response=await fetch(`${config.urlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user,
        password: password
      })
    });
    let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },2000);
            await AsyncStorage.clear();
        } else {
         
            let userData=await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Home');
        }
  } 

  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;

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
          <Text style={styles.title}>Fazer login!</Text>
          <Text style={styles.text}>Insira as credenciais de acesso</Text>
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
                onChangeText={text=>setUser(text)}
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
                secureTextEntry={true} 
                onChangeText={text=>setPassword(text)}
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            
            
          <TouchableOpacity style = {styles.button} onPress={ () => sendForm()}>
            <Text style = {styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <View>
              <Text style={styles.login_msg(display)}>Usuário e/ou Senha Inválidos</Text>
            </View>
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