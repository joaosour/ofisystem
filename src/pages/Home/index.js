import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';



export default function Home() {

const navigation = useNavigation();



const [user, setUser]=useState(null);

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
            <Image style={styles.headerCenterImg} source={require('../../assets/home_top.png')}/> 
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

          <View style={styles.containerCards}>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/cart_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Vendas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA} onPress={ () => navigation.navigate('Catalog')}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/catalog_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Catálogo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/list_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Ordem de serviço</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/report_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Relatórios</Text>
            </TouchableOpacity>

          </View>
        </Animatable.View>

    

       

   </View>
      
  
      

  );
}