import styles from './styles.js'
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function ConfirmacaoCadastroCat() {

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
          
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />

        <View style={styles.modalContent}>
              <Text style={styles.modalText}>Nova Categoria Cadastrada com Sucesso!</Text>
            </View>

            <TouchableOpacity style = {styles.button1} onPress={ () => navigation.navigate('CadastroCategoria')} >
             <Text style = {styles.buttonText1} >VOLTAR PARA CADASTRO</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button} onPress={ () => navigation.navigate('Catalog')}>
            <Text style = {styles.buttonText} >IR PARA CATÁLOGO</Text>
          </TouchableOpacity>

 
        </Animatable.View>
        
          <View style={styles.navigationBar}>
          
          </View>



   </View>
  );
}