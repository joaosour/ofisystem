import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

import { minhaConstante } from '../Catalog/index.js'


export default function ExclusaoCategoria() {

const navigation = useNavigation();
const route = useRoute();
const [user, setUser]=useState(null);
const [categorias, setCategorias]=useState([]);
const [cat, setCat]=useState(null);
const { categoriaSelecionada } = route.params;
const [selectCategoria, setSelectCategoria]=useState(null);
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
      const response = await fetch(`${config.urlRoot}listarCategoria`);
        const categoriasData = await response.json();
        setCategorias(categoriasData);
        
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

async function sendForm4(){
  try {
  let response= await fetch(`${config.urlRoot}excluirCategoria`, {
      method: 'DELETE',
      body:JSON.stringify({
        selectCategoria: selectCategoria,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

  });
  let json = await response.json()
    if(json ==='Categoria excluída com sucesso!'){
      
      navigation.navigate('ConfirmacaoExclusaoCategoria');
      //await AsyncStorage.clear();
    }else{
      setTimeout(()=>{
        setMsg('');
      }, 1500)
      setMsg(json);
    } 
  } catch (error) {
    console.error(error);
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
        <Text style={styles.title}>Excluir categoria!</Text>
          <Text style={styles.text}>Confirme a exclusão da categoria</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />


        

        <ScrollView showsVerticalScrollIndicator={false}>
  
        {categoriaSelecionada && categorias
        .filter((categoria) => categoria.id === categoriaSelecionada.id)
        .map((categoria) => (
            <View style={styles.containerCards} key={categoria.id}>
              <Text style={styles.titleCards}>{categoria.categoria}</Text>
              
              <View style={styles.buttonCardsA}>
                <View style={styles.buttonCardsB}>s
                  <Image style={styles.buttonImage} source={{uri: categoria.url_img}} />
                </View>

                <View style={styles.containerDescription}>
                  <Text style={styles.textDescription}>{categoriaSelecionada.descricao}</Text>
                  
                  <Text style={styles.modelDescription}>Modelos:</Text>
                  <View style={styles.containerBottomDescription}>
                    <Text style={styles.amountDescription}>{categoriaSelecionada.quantModel}</Text>
                    
                  </View>

                  
                </View>
              </View>
            </View>
          ))}
        

    <View>
      <Text style={styles.titleCards}>Confirme a categoria: </Text>
      <TextInput
                placeholder='Insira a categoria a ser excluida'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                
                onChangeText={text=>setSelectCategoria(text)}
                />
        
        </View>
        <View>
            <Text style={styles.inputTitle1}>{msg}</Text>
          </View>

          <View style={styles.headerBottons}>
            <TouchableOpacity
          style={styles.bottonExcluir} 
          onPress={() => sendForm4()} //cadastrar modelo
          > 
            <Text style={styles.textBottonExcluir}>Confirmar Exclusão</Text> 
          </TouchableOpacity>
        </View>
  
  
    
</ScrollView> 


        </Animatable.View>


   </View>
  );
}