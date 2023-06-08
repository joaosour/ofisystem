import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';


export default function CatalogA() {

const navigation = useNavigation();
const [user, setUser]=useState(null);
const [modelos, setModelos]=useState([]);
const [cat, setCat]=useState(null);

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
    setUser(json.name);
  }
  getUser();
}, [])


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

        <View style={styles.headerBottons}>
          <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('CadastroModelo')} //cadastrar modelo
          >
            <Text style={styles.buttonRegisterFont}>Cadastrar Modelo</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        {modelos.map((modelo) => ( 
                    
        <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Bancos</Text>
            
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={{uri: modelo.url_imgModel}}/>
              </View>

              <View style={styles.containerDescription}>

                <View style={styles.containerDescriptionText}>
                  <Text style={styles.modelDescription}>Modelo</Text>
                  <Text style={styles.nameModelDescription}>{modelo.modelo}</Text>
                  <Text style={styles.subtotalDescription}>Valor: </Text>
                </View>

                <View style={styles.containerDescriptionAmount}>
                <Text style={styles.textValueAmount}>R$ {modelo.valor}</Text>

                </View>

              </View>
            </View>
            </View>
        ))}
        </ScrollView> 

        </Animatable.View>


   </View>
  );
}
