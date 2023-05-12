import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

 return (
   <View style = {styles.container}>

        <View style={styles.containerHeader}>

          <View style={styles.headerLeft}>
              <Image style={styles.headerLeftImg} source={require('../../assets/options_icon.png')}/>
          </View>

          <View style={styles.headerCenter}>
            <Image style={styles.headerCenterImg} source={require('../../assets/home_top.png')}/> 
          </View>

          <View style={styles.headerRight}>
              <Image style={styles.headerRightImg} source={require('../../assets/person_icon_white.png')}/>
              <Text style={styles.headerRightText}>Leandro</Text>
          </View>

        </View>
        
        <Animatable.View
          animation="slideInUp"
          style={styles.containerForm}
          easing={'ease-out-back'}
          duration={1000}
          direction='alternate'>

          <View style={styles.smallLine}></View>

          <View style={styles.containerCards}>
            
            <TouchableOpacity style={styles.buttonCards}>
              <View style={[styles.buttonCards,
                          {backgroundColor: '#F9F9F9',
                          height: 80,
                          elevation: 0,
                          marginBottom: 0,
                          justifyContent: 'center'}]}>
                 <Image style={styles.buttonIcons} source={require('../../assets/cart_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Vendas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCards}>
              <View style={[styles.buttonCards,
                          {backgroundColor: '#F9F9F9',
                          height: 80,
                          elevation: 0,
                          marginBottom: 0,
                          justifyContent: 'center'}]}>
                 <Image style={styles.buttonIcons} source={require('../../assets/catalog_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Catálogo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCards}>
              <View style={[styles.buttonCards,
                          {backgroundColor: '#F9F9F9',
                          height: 80,
                          elevation: 0,
                          marginBottom: 0,
                          justifyContent: 'center'}]}>
                 <Image style={styles.buttonIcons} source={require('../../assets/list_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Catálogo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCards}>
              <View style={[styles.buttonCards,
                          {backgroundColor: '#F9F9F9',
                          height: 80,
                          elevation: 0,
                          marginBottom: 0,
                          justifyContent: 'center'}]}>
                 <Image style={styles.buttonIcons} source={require('../../assets/report_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Catálogo</Text>
            </TouchableOpacity>

          </View>

        </Animatable.View>

   </View>
  );
}