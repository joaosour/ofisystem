import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';


export default function CatalogA() {

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

                <View style={styles.containerDescriptionText}>
                  <Text style={styles.modelDescription}>Modelo</Text>
                  <Text style={styles.nameModelDescription}>Calypso</Text>
                  <Text style={styles.subtotalDescription}>Subtotal</Text>
                </View>

                <View style={styles.containerDescriptionAmount}>

                  <View style={styles.containerDescriptionAmountA}>
                    <TouchableOpacity style={styles.bottomAddRemove}>
                      <Text style={styles.bottomAddRemoveText}>-</Text>
                    </TouchableOpacity>

                    <TextInput
                      style={styles.amountInput}
                      placeholder='1'  
                    >
                    </TextInput>

                    <TouchableOpacity style={styles.bottomAddRemove}>
                      <Text style={styles.bottomAddRemoveText}>+</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.containerDescriptionAmountB}>

                    <TouchableOpacity style={styles.buttonAddCart}>

                      <Text style={styles.fontButtonAddCart}>Adicionar</Text>

                    </TouchableOpacity>

                    <Text style={styles.textValueAmount}>R$ 38,90</Text>

                  </View>

                </View>


              </View>

            </View>

            </View>
        
        </ScrollView> 

        </Animatable.View>


   </View>
  );
}