import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

export default function CadastroCategoria() {

const navigation = useNavigation();

const [user, setUser]=useState(null);

const [idUser, setIdUser] = useState(null);

const setIdUserValue = (value) => {
  setIdUser(value);
};

const [novaCategoria, setNovaCategoria]=useState(null);
const [novaDescricao, setNovaDescricao]=useState(null);
const [novaImg, setNovaImg]=useState(null);
const [msg, setMsg] = useState(null);

async function sendForm2(){
  try{
    let response = await fetch(`${config.urlRoot}cadastrarCategoria`,{
      method: 'POST',
      body: JSON.stringify({
        
        novaCategoria: novaCategoria,
        novaDescricao: novaDescricao,
        novaImg: novaImg, 
      }),
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json'
      }
    });
    let json = await response.json()
      if(json === 'Categoria Criada Com Sucesso!'){
         await AsyncStorage.clear();
        navigation.navigate('ConfirmacaoCadastroCat');
      } else {
        setTimeout(()=> {
          setMsg('');
        }, 1500)
        setMsg(json);
      }

  }catch (error){
    console.error(error);
  }
};

 return (
   <View style = {styles.container}>

        <View style={styles.containerHeader}>

          <TouchableOpacity style={styles.headerLeft}>
              <Image style={styles.headerLeftImg} source={require('../../assets/options_icon.png')}/>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Image style={styles.headerCenterImg} source={require('../../assets/catalog_top.png')}/> 
          </View>

          <TouchableOpacity style={styles.headerRight} onPress={ () => navigation.navigate('Profile')}>
              <Image style={styles.headerRightImg} source={require('../../assets/person_icon_white.png')}/>
              <Text style={styles.headerRightText}>{user}</Text>
          </TouchableOpacity>

        </View>
        

        <Animatable.View
          animation="slideInUp"
          style={styles.containerForm}
          easing={'ease-out-back'}
          duration={1000}
          direction='alternate'>
        <View style={styles.smallLine}></View>
             <ScrollView showsVerticalScrollIndicator={false}>
          
          <Text style={styles.title}>Cadastrar categoria!</Text>
          <Text style={styles.text}>Insira os dados do nova categoria abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />

          <View style={styles.containerAB}>

            <View style={styles.containerA}>
              <Text style={styles.titleCards}>Categoria</Text>
              <View style={styles.inputBackgroundA}>
                          <TextInput
                          placeholder='Categoria...'
                          placeholderTextColor='#B1B1B1'
                          style={styles.inputCategoria}
                          multiline={false}
                          numberOfLines={1}
                          onChangeText={text=> setNovaCategoria(text)}
                        /> 
              </View>
            </View>

            <View style={styles.containerB}>
              <Text style={styles.titleCards}>Imagem</Text>
              <View style={styles.inputBackgroundB}>
                <Image style={styles.buttonImage} source={require('../../assets/imageInsert.png')}/>
                <TextInput
                        style={[styles.inputCategoria, {marginLeft: 0}]}
                        placeholder='Imagem URL'
                        placeholderTextColor='#B1B1B1'
                        numberOfLines={1}
                        onChangeText={text=> setNovaImg(text)}
                />
              </View>
            </View>

          </View>

          <View style={styles.containerC}>
              <Text style={styles.titleCards}>Descrição</Text>
              <View style={styles.inputBackgroundC}>
                  <TextInput
                    placeholder='Descrição...'
                    placeholderTextColor='#B1B1B1'
                    style={styles.input}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text=>setNovaDescricao(text)}
                  />
              </View>
          </View>
          
          <TouchableOpacity style = {styles.button} onPress={ () => sendForm2()}>
            <Text style = {styles.buttonText}>CONCLUIR CADASTRO</Text>
          </TouchableOpacity>

            <Text style= {styles.popupErrorText}>{msg}</Text>
        </ScrollView> 

        </Animatable.View>
   </View>
  );
}