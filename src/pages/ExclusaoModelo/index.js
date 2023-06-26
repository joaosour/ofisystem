import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

import { minhaConstante } from '../Catalog/index.js'


export default function ExclusaoModelo() {

const navigation = useNavigation();
const route = useRoute();
const [user, setUser]=useState(null);
const [modelos, setModelos]=useState([]);
const [cat, setCat]=useState(null);
const { modeloSelecionado } = route.params;
const [selectModel, setSelectModel]=useState(null);
const [msg, setMsg] = useState(null);

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



useEffect(() => {
  async function fetchData(){
    try {
      const response = await fetch(`${config.urlRoot}listarModelo`);
        const modelosData = await response.json();
        setModelos(modelosData);
        
    } catch (error){
      console.error(error);
    }
  }
  fetchData();
}, []);

useEffect(()=> {
  async function getUser()
  {
    let response=await AsyncStorage.getItem('userData');
    let json=JSON.parse(response);
    if (json != null){
      setUser(json.name);
    }
    
  }
  getUser();
}, []);

async function sendForm3() {
  if (selectModel === modeloSelecionado.modelo) {
    try {
      let response = await fetch(`${config.urlRoot}excluirModelo`, {
        method: 'DELETE',
        body: JSON.stringify({
          selectModel: selectModel,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      let json = await response.json();
      if (json === 'Modelo excluído com sucesso!') {
        navigation.navigate('ConfirmacaoExclusaoModelo');
      } else {
        setTimeout(() => {
          setMsg('');
        }, 1500);
        setMsg(json);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    setTimeout(() => {
      setMsg('');
    }, 1500);
    setMsg('O modelo inserido não corresponde ao modelo selecionado!');
  }
}


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
        <Text style={styles.title}>Excluir modelo!</Text>
          <Text style={styles.text}>Confirme a exclusão do modelo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />


        

        <ScrollView showsVerticalScrollIndicator={false}>
  {modeloSelecionado && modelos
    .filter((modelo) => modelo.id === modeloSelecionado.id) // Substitua 'NomeCategoria' pelo valor desejado
    .map((modelo) => (
      <View style={styles.containerCards} key={modelo.id}>
        <Text style={styles.modeloSelect}>Modelo Selecionado: </Text>
        <Text style={styles.titleCards}>{modelo.nomeCategoria}</Text>
        

        <View style={styles.buttonCardsA}>
          <View style={styles.buttonCardsB}>
           
            <Image style={styles.buttonImage} source={{uri: modelo.url_imgModel}}/>
          </View>

          <View style={styles.containerDescription}>
            <View style={styles.containerDescriptionText}>
              <Text style={styles.modelDescription}>Modelo</Text>
              
              
              <Text style={styles.nameModelDescription}>{modeloSelecionado.modelo}</Text>
              
              <Text style={styles.subtotalDescription}>Valor: </Text>
            </View>

            <View style={styles.containerDescriptionAmount}>
            
        
            
              <Text style={styles.textValueAmount}>R$ {modeloSelecionado.valor}</Text>
            </View> 
          </View>
        </View>
      </View>
    ))}


        <View style={styles.containerCD}>


        <View style={styles.containerD}>
          <Text style={styles.titleCards}>Confirme o modelo </Text>
          <View style={styles.inputBackgroundD}>
                      <TextInput
                      placeholder='Digite...'
                      placeholderTextColor='#B1B1B1'
                      style={styles.inputCategoria}
                      multiline={false}
                      numberOfLines={1}
                      onChangeText={text=> setSelectModel(text)}
                    /> 
          </View>
        </View>

        </View>


<TouchableOpacity
  style = {styles.button} onPress={ () => sendForm3()}
>
<Text style = {styles.buttonText}>CONFIRMAR EXCLUSÃO</Text>
</TouchableOpacity>

            <Text style= {styles.popupErrorText}>{msg}</Text>

  
  
    
</ScrollView> 


        </Animatable.View>


   </View>
  );
}