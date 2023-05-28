import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Catalog() {

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
          
          
          <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Bancos</Text>
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={require('../../assets/cover_banco.png')}/>
              </View>

              <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Modelos de acentos com e sem molas, de couro, acolchoado, esportivo, angular ajustável etc.</Text>
                <Text style={styles.modelDescription}>Modelos:</Text>
                <View style={styles.containerBottomDescription}>
                  <Text style={styles.amountDescription}>15</Text>
                  <TouchableOpacity style={styles.buttonSee} onPress={ () => navigation.navigate('CatalogA')}>
                    <Text style={styles.buttonSeeFont}>Ver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Suportes</Text>
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={require('../../assets/cover_suporte.png')}/>
              </View>

              <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Modelos de garfos com pistão de 90mm para bikes médias e adultas.</Text>
                <Text style={styles.modelDescription}>Modelos:</Text>
                <View style={styles.containerBottomDescription}>
                  <Text style={styles.amountDescription}>12</Text>
                  <TouchableOpacity style={styles.buttonSee}>
                    <Text style={styles.buttonSeeFont}>Ver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Suportes</Text>
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={require('../../assets/cover_garfo.png')}/>
              </View>

              <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Modelos de guidãos para cross, mountain bike e biclietas casuais.</Text>
                <Text style={styles.modelDescription}>Modelos:</Text>
                <View style={styles.containerBottomDescription}>
                  <Text style={styles.amountDescription}>17</Text>
                  <TouchableOpacity style={styles.buttonSee}>
                    <Text style={styles.buttonSeeFont}>Ver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Suportes</Text>
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={require('../../assets/cover_guidao.png')}/>
              </View>

              <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Modelos de suportes para bikes infantis, juvenis e tamanho adulto, regulagem dupla e a quatro pinos.</Text>
                <Text style={styles.modelDescription}>Modelos:</Text>
                <View style={styles.containerBottomDescription}>
                  <Text style={styles.amountDescription}>11</Text>
                  <TouchableOpacity style={styles.buttonSee}>
                    <Text style={styles.buttonSeeFont}>Ver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

         
          <View style={styles.containerCards}>
            <Text style={styles.titleCards}>Suportes</Text>
            <View style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                <Image style={styles.buttonImage} source={require('../../assets/cover_garfo.png')}/>
              </View>

              <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Modelos de suportes para bikes infantis, juvenis e tamanho adulto, regulagem dupla e a quatro pinos.</Text>
                <Text style={styles.modelDescription}>Modelos:</Text>
                <View style={styles.containerBottomDescription}>
                  <Text style={styles.amountDescription}>17</Text>
                  <TouchableOpacity style={styles.buttonSee}>
                    <Text style={styles.buttonSeeFont}>Ver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> 

        
        </ScrollView> 

        </Animatable.View>


   </View>
  );
}