import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';

export default function CadastroModelo() {

const navigation = useNavigation();

const [user, setUser]=useState(null);

const [idUser, setIdUser] = useState(null);

const setIdUserValue = (value) => {
  setIdUser(value);
};

const [novoModelo, setNovoModelo]=useState(null);
const [novoValor, setNovoValor]=useState(null);
const [novaImgmod, setNovaImgmod]=useState(null);
const [novaCat, setNovaCat]=useState(null);
const [msg, setMsg] = useState(null);



async function sendForm3(){
  try{
    let response = await fetch(`${config.urlRoot}cadastrarModelo`,{
      method: 'POST',
      body: JSON.stringify({
        novoModelo: novoModelo,
        novoValor: novoValor,
        novaImgmod: novaImgmod,
        novaCat: novaCat, 
      }),
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json'
      }
    });
    let json = await response.json()
      if(json === 'Modelo Criado Com Sucesso!'){
         await AsyncStorage.clear();
        navigation.navigate('ConfirmacaoCadastroMod');
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
          
          <Text style={styles.title}>Cadastrar modelo!</Text>
          <Text style={styles.text}>Insira os dados do novo modelo abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />





          <View style={styles.containerAB}>

          <View style={styles.containerA}>
            <Text style={styles.titleCards}>Modelo</Text>
            <View style={styles.inputBackgroundA}>
                        <TextInput
                        placeholder='Modelo...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNovoModelo(text)}
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
                      onChangeText={text=> setNovaImgmod(text)}
              />
            </View>
          </View>

          </View>

          <View style={styles.containerCD}>

          <View style={styles.containerC}>
            <Text style={styles.titleCards}>Categoria</Text>
            <View style={styles.inputBackgroundC}>
                        <TextInput
                        placeholder='Categoria...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNovaCat(text)}
                      /> 
            </View>
          </View>

          <View style={styles.containerD}>
            <Text style={styles.titleCards}>Valor </Text>
            <View style={styles.inputBackgroundD}>
                        <TextInput
                        placeholder='R$...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNovoValor(text)}
                      /> 
            </View>
          </View>

          </View>


          <TouchableOpacity style = {styles.button} onPress={ () => sendForm3()}>
          <Text style = {styles.buttonText}>CONCLUIR CADASTRO</Text>
          </TouchableOpacity>





{/* 
          <View style={styles.containerCards}>
           
            <Text style={[styles.titleCards
              ,{color: '#1D1238'
              , fontSize: 15
              , marginBottom: 5}]}
            >Modelo:</Text>
            <TextInput
              placeholder='Digite o nome do modelo'
              placeholderTextColor='#B1B1B1'
              style={styles.inputCategoria}
              multiline={true}
              numberOfLines={1}
              onChangeText={text=> setNovoModelo(text)}
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
              //multiline={true}
              numberOfLines={1}
              onChangeText={text=> setNovaImgmod(text)}
            />
              </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textDescription}>Valor:</Text>
          <TextInput
            placeholder='Digite o valor desse modelo'
            placeholderTextColor='#B1B1B1'
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            onChangeText={text=>setNovoValor(text)}
          />

      <Text style={styles.textDescription}>Categoria</Text>
          <TextInput
            placeholder='Digite o nome da categoria'
            placeholderTextColor='#B1B1B1'
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            onChangeText={text=>setNovaCat(text)}
          />
              

          <View style={styles.containerBottomDescription}>
              

            <Text style={styles.amountDescription}></Text>
            <TouchableOpacity style={styles.buttonInclude} onPress={() => sendForm3()}>
              <Text style={styles.buttonIncludeFont}>Incluir</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>

            </View>
          </View> */}
                
            <Text style= {styles.popupErrorText}>{msg}</Text>


        </ScrollView> 

        </Animatable.View>
   </View>
  );
}