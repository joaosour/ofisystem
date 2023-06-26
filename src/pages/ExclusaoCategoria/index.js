import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';




export default function ExclusaoCategoria() {

const navigation = useNavigation();
const route = useRoute();
const [user, setUser]=useState(null);
const [categorias, setCategorias]=useState([]);
const [cat, setCat]=useState(null);
const { categoriaSelecionada } = route.params;
const [selectCategoria, setSelectCategoria]=useState(null);
const [msg, setMsg] = useState(null);
const [catSelect, setCatSelect]=useState(null);

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

async function sendForm4() {
  if (selectCategoria === categoriaSelecionada.categoria) {
    try {
      let response = await fetch(`${config.urlRoot}excluirCategoria`, {
        method: 'DELETE',
        body: JSON.stringify({
          selectCategoria: selectCategoria,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      let json = await response.json();
      if (json === 'Categoria excluída com sucesso!') {
        navigation.navigate('ConfirmacaoExclusaoCategoria');
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
    setMsg('A categoria inserida não corresponde à categoria selecionada!');
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

        {categorias
        .filter((categoria) => categoria.id === categoriaSelecionada.id)
        .map((categoria) => (
            <View style={styles.containerCards} key={categoria.id}>
              <Text style={styles.categoriaSelect}>Categoria Selecionada: </Text>
              <Text style={styles.titleCards}>{categoria.categoria}</Text>
             
              
              <View style={styles.buttonCardsA}>
                <View style={styles.buttonCardsB}>
                  <Image style={styles.buttonImage} source={{uri: categoria.url_img}} />
                </View>

                <View style={styles.containerDescription}>
                  
                  <Text style={styles.textDescription}>{categoria.descricao}</Text>
<<<<<<< HEAD

=======
                  <View style={styles.headerBottons}>
            <TouchableOpacity
          style={styles.bottonExcluir} 
          onPress={() => sendForm4()} //cadastrar modelo
          > 
            <Text style={styles.textBottonExcluir}>Confirmar Exclusão</Text> 
          </TouchableOpacity>
        </View>
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
                  
                  <Text style={styles.modelDescription}>Modelos:</Text>
                  <View style={styles.containerBottomDescription}>
                    <Text style={styles.amountDescription}>{categoria.quantModel}</Text>
                  </View>

                 
                </View>
              </View>
            </View>
          ))}

<<<<<<< HEAD
          
        <View style={styles.containerCD}>


      <View style={styles.containerD}>
        <Text style={styles.titleCardsSelect}>Confirme a categoria </Text>
        <View style={styles.inputBackgroundD}>
                    <TextInput
                    placeholder='Digite...'
                    placeholderTextColor='#B1B1B1'
                    style={styles.inputModelo}
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={text=> setSelectCategoria(text)}
                  /> 
        </View>
      </View>

      </View>


      <TouchableOpacity
      style = {styles.button} onPress={ () => sendForm4()}
      >
      <Text style = {styles.buttonText}>CONFIRMAR EXCLUSÃO</Text>
      </TouchableOpacity>
          
            <Text style= {styles.popupErrorText}>{msg}</Text>

    
</ScrollView> 

        </Animatable.View>

=======
    <View>
      <Text style={[styles.titleCards, {fontSize: 17}]}>Confirme a categoria </Text>
      <TextInput
                placeholder='Digite aqui...'
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

          
  
  
    
</ScrollView> 


        </Animatable.View>


>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
   </View>
  );
}