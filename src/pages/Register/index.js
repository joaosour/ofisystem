import styles from './styles.js'
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';

export default function Register() {

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [IsFocusedInput3, setIsFocusedInput3] = useState(false)
  const [IsFocusedInput4, setIsFocusedInput4] = useState(false)

  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
    // setTimeout(hideModal, 3000);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

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
          <Text style={styles.title}>Cadastrar usuário!</Text>
          <Text style={styles.text}>Insira os dados do novo usuário abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />

        <Modal visible={isVisible} transparent={true} animationType="fade">
          <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
              <Text style={styles.modalText}>Usuário cadastrado com sucesso!</Text>
            </View>


          </View>
          <TouchableOpacity style = {styles.buttonBack} onPress={ () => navigation.navigate('Login')} >
             <Text style = {styles.buttonText} >IR PARA O LOGIN</Text>
          </TouchableOpacity>
        </Modal>

        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.inputTitle}>Usuário</Text>
            <View style={inputStyle1}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='Digite um usuário'
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
                placeholder='Digite uma senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                secureTextEntry={true}  
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            
          <Text style={styles.inputTitle}>Usuário administrador</Text>

          <View style={inputStyle3}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='Digite seu usuário'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput3}
                onBlur={handleBlurInput3} 
                />

            </View>
          
          <Text style={styles.inputTitle}>Senha administrador</Text>

          <View style={inputStyle4}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput4}
                onBlur={handleBlurInput4} 
                secureTextEntry={true} 
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>

            
            
          <TouchableOpacity style = {styles.button} onPress={showModal} >
            <Text style = {styles.buttonText} >CADASTRAR</Text>
          </TouchableOpacity>

          </ScrollView>
        </Animatable.View>
        
          <View style={styles.navigationBar}>
          
          </View>



   </View>
  );
}