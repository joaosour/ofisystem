import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';

export default function Profile() {

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

  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;

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
            <Text style={styles.nameProfile}>Leandro de Oliveira!</Text>
            <Text style={styles.functionProfile}>Funcionário</Text>
          </View>
          <Image style={{width: 17, height: 17, marginBottom: 20}}source={require('../../assets/edit_icon.png')}/>
        </View>

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

          <Text style={styles.inputTitle}>Data de nascimento</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/calendar_icon.png')}
              />
              <TextInput
                placeholder='Digite sua data de nascimento'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2} 
                />

            </View>
            
            
          <TouchableOpacity style = {styles.button} onPress={ () => navigation.navigate('Home')}>
            <Text style = {styles.buttonText}>CONFIRMAR ALTERAÇÃO</Text>
          </TouchableOpacity>
          </ScrollView>
        </Animatable.View>

   </View>
  );
}