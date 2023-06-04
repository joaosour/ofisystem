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
        //novaImg: novaImg, 
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

          <View style={styles.containerCards}>
           
            <Text style={[styles.titleCards
              ,{color: '#1D1238'
              , fontSize: 15
              , marginBottom: 5}]}
            >Categoria:</Text>
            <TextInput
              placeholder='Digite o nome da categoria'
              placeholderTextColor='#B1B1B1'
              style={styles.inputCategoria}
              multiline={true}
              numberOfLines={1}
              onChangeText={text=> setNovaCategoria(text)}
            />            
          <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <TouchableOpacity>
                  <Image style={styles.buttonImage} source={require('../../assets/imageInsert.png')}/>
                </TouchableOpacity>
         
                <TextInput
              placeholder='Link Foto'
              placeholderTextColor='#B1B1B1'
              //style={styles.inputCategoria}
              multiline={true}
              numberOfLines={1}
              //onChangeText={text=> setNovaImg(text)}
            />
              </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textDescription}>Descrição:</Text>
          <TextInput
            placeholder='Digite a descrição dessa categoria'
            placeholderTextColor='#B1B1B1'
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            onChangeText={text=>setNovaDescricao(text)}
          />
              

          <View style={styles.containerBottomDescription}>
              

            <Text style={styles.amountDescription}></Text>
            <TouchableOpacity style={styles.buttonInclude} onPress={() => sendForm2()}>
              <Text style={styles.buttonIncludeFont}>Incluir</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>

            </View>
          </View>
                

          <View>
            <Text style={styles.inputTitle1}>{msg}</Text>
          </View>
        </ScrollView> 

        </Animatable.View>
   </View>
  );
}