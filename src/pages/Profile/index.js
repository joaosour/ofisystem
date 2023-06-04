import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

export default function Profile() {

  const [user, setUser]=useState(null);
  const [senhaAntiga, setSenhaAntiga] = useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(()=> {
    async function getIdUser(){
      let response= await AsyncStorage.getItem('userData');
      let json=JSON.parse(response);
      setIdUser(json.id);
    }
    getIdUser();
  });


useEffect(()=> {
  async function getUser()
  {
    let response=await AsyncStorage.getItem('userData');
    let json=JSON.parse(response);
    setUser(json.name);
  }
  getUser();
}, []);

  async function sendForm(){
    let response= await fetch(`${config.urlRoot}verifyPass`, {
        method: 'POST',
        body:JSON.stringify({
          id: idUser,
          senhaAntiga: senhaAntiga,
          novaSenha: novaSenha,
          confNovaSenha: confNovaSenha
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

    });
    let json= await response.json()
      if(json==='Senha atualizada com sucesso!'){
        navigation.navigate('AlteracaoSenha');
        await AsyncStorage.clear();
      }else{
        setTimeout(()=>{
          setMsg('');
        }, 1500)
        setMsg(json);
      }
    
    
  }

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [IsFocusedInput3, setIsFocusedInput3] = useState(false)

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

  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle3 = IsFocusedInput3? styles.inputContainerFocused : styles.inputContainer;

 return (
   <View style = {styles.container}>
          <Animatable.Image style={styles.containerLogo}
            source={require('../../assets/perfil_top.png')}
          />

        <Animatable.View
        animation="slideInUp"
        style={styles.containerForm}
        easing={'ease-out-back'}
        duration={1000}
        direction='alternate'
        >

        <View style={styles.smallLine}></View>

        <View style={styles.containerProfile}>
          <View style={styles.circleProfile}>
            <Image style={styles.imageProfile} source={require('../../assets/photo_profile_user.png')}/>
          </View>
          <View>
            <Text style={styles.nameProfile}>{user}</Text>
            <Text style={styles.functionProfile}>Funcionário</Text>
          </View>
          <Image style={{width: 17, height: 17, marginBottom: 20}}source={require('../../assets/edit_icon.png')}/>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          

          <Text style={styles.inputTitle}>Senha Atual</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha atual'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput1}
                onBlur={handleBlurInput1}
                secureTextEntry={true}
                onChangeText={text=>setSenhaAntiga(text)}  
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>

            <Text style={styles.inputTitle}>Nova Senha</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua nova senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                secureTextEntry={true} 
                onChangeText={text=>setNovaSenha(text)}  
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>

            <Text style={styles.inputTitle}>Confirmar Nova Senha</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Confirme sua nova senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput3}
                onBlur={handleBlurInput3}
                secureTextEntry={true} 
                onChangeText={text=>setConfNovaSenha(text)} 
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>

            
            
          <TouchableOpacity style = {styles.button} onPress={ () => sendForm()}>
            <Text style = {styles.buttonText}>CONFIRMAR ALTERAÇÃO</Text>
          </TouchableOpacity>
          <View>
          <Text style= {styles.inputTitle1}>{msg}</Text>

          </View>
          
          </ScrollView>
        </Animatable.View>

   </View>
  );
}