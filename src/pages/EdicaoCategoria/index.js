import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

import { minhaConstante } from '../Catalog/index.js'


export default function EdicaoCategoria() {

const navigation = useNavigation();
const route = useRoute();
const [user, setUser]=useState(null);
const [categorias, setCategorias]=useState([]);
const [cat, setCat]=useState(null);
const { categoriaSelecionada } = route.params;
const [selectCategoria, setSelectCategoria]=useState(null);
const [msg, setMsg] = useState(null);
const [novaCategoria, setNovaCategoria]=useState(null);
const [novaDescricao, setNovaDescricao]=useState(null);
<<<<<<< HEAD
const [novaImagemCat, setNovaImagemCat]=useState(null);
=======
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
const [confirmeCategoria, setConfirmeCategoria]=useState(null);


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
  let response= await fetch(`${config.urlRoot}editarCategoria`, {
      method: 'POST',
      body:JSON.stringify({
        confirmeCategoria: categoriaSelecionada.categoria,
        novaCategoria: novaCategoria,
        novaDescricao: novaDescricao,
<<<<<<< HEAD
        novaImagemCat: novaImagemCat,
        
=======
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

  });
  let json = await response.json()
    if(json ==='Categoria Editada Com Sucesso!'){
      
      navigation.navigate('ConfirmacaoEdicaoCategoria');
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
        <Text style={styles.title}>Editar categoria!</Text>
          <Text style={styles.text}>Confirme a edição da categoria</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />


        

        <ScrollView showsVerticalScrollIndicator={false}>

        {categorias
        .filter((categoria) => categoria.id === categoriaSelecionada.id)
        .map((categoria) => (
            <View style={styles.containerCards} key={categoria.id}>
<<<<<<< HEAD
              {/* <Text style={styles.categoriaSelect}>Categoria Selecionada: </Text> */}
=======
              <Text style={styles.categoriaSelect}>Categoria Selecionada: </Text>
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
              <Text style={styles.titleCards}>{categoria.categoria}</Text>
              
              <View style={styles.buttonCardsA}>
                <View style={styles.buttonCardsB}>
                  <Image style={styles.buttonImage} source={{uri: categoria.url_img}} />
                </View>

                <View style={styles.containerDescription}>
                  
                  <Text style={styles.textDescription}>{categoria.descricao}</Text>
<<<<<<< HEAD
                  
                  <Text style={styles.modelDescription}>Modelos</Text>
=======
                  <View style={styles.headerBottons}>
            <TouchableOpacity
          style={styles.bottonEditar} 
          onPress={() => sendForm4()} //cadastrar modelo
          > 
            <Text style={styles.textBottonEditar}>Confirmar edição</Text> 
          </TouchableOpacity>
        </View>
                  
                  <Text style={styles.modelDescription}>Modelos:</Text>
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
                  <View style={styles.containerBottomDescription}>
                    <Text style={styles.amountDescription}>{categoria.quantModel}</Text>
                  </View>

                 
                </View>
              </View>
            </View>
          ))}

<<<<<<< HEAD




            <View style={styles.containerAB}>

            <View style={styles.containerA}>
              <Text style={styles.titleCards}>Nova Categoria</Text>
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
              <Text style={styles.titleCards}>Nova Imagem</Text>
              <View style={styles.inputBackgroundB}>
                <Image style={styles.buttonImageEdit} source={require('../../assets/imageInsert.png')}/>
                <TextInput
                        style={[styles.inputCategoria, {marginLeft: 0}]}
                        placeholder='Imagem URL'
                        placeholderTextColor='#B1B1B1'
                        numberOfLines={1}
                        onChangeText={text=> setNovaImagemCat(text)}
                />
              </View>
            </View>

            </View>

            <View style={styles.containerC}>
              <Text style={styles.titleCards}>Nova Descrição</Text>
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

          <TouchableOpacity
          style={styles.button} 
          onPress={() => sendForm4()} //cadastrar modelo
          > 
            <Text style={styles.buttonText}>CONFIRMAR EDIÇÃO</Text> 
          </TouchableOpacity>




         {/* <View>

            <Text style={[styles.titleCards, {fontSize: 17}]}>Informe a Nova Categoria </Text>
            <TextInput
                      placeholder='Digite aqui...'
                      placeholderTextColor='#B1B1B1'
                      style={styles.input}
                      onFocus={handleFocusInput2}
                      onBlur={handleBlurInput2}
                      
                      onChangeText={text=>setNovaCategoria(text)}
            />
            <Text style={[styles.titleCards, {fontSize: 17}]}>Informe a Nova Descrição </Text>
            <TextInput
                      placeholder='Digite aqui...'
                      placeholderTextColor='#B1B1B1'
                      style={styles.input}
                      onFocus={handleFocusInput2}
                      onBlur={handleBlurInput2}
                      
                      onChangeText={text=>setNovaDescricao(text)}
            />
        
        </View> */}

            <Text style= {styles.popupErrorText}>{msg}</Text>

=======
    <View>

      <Text style={[styles.titleCards, {fontSize: 17}]}>Informe a Nova Categoria </Text>
      <TextInput
                placeholder='Digite aqui...'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                
                onChangeText={text=>setNovaCategoria(text)}
      />
      <Text style={[styles.titleCards, {fontSize: 17}]}>Informe a Nova Descrição </Text>
      <TextInput
                placeholder='Digite aqui...'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                
                onChangeText={text=>setNovaDescricao(text)}
      />
        
        </View>
        <View>
            <Text style={styles.inputTitle1}>{msg}</Text>
          </View>
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7

          
  
  
    
</ScrollView> 


        </Animatable.View>


   </View>
  );
}