import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config/config.json';




export default function Catalog() {

  const navigation = useNavigation();
  const [user, setUser]=useState(null);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${config.urlRoot}listarCategoria`);
        const categoriasData = await response.json();
        setCategorias(categoriasData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      if (json != null){
        setUser(json.name);
      }
      
    }

    getUser();
  }, []);

  const handleVerModelos = (categoria) => {
    setCategoriaSelecionada(categoria);
    navigation.navigate('CatalogA', {categoria: categoria});
  };

  const handleExcluirCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    navigation.navigate('ExclusaoCategoria', {categoriaSelecionada: categoria})
  };
  const handleEditarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    navigation.navigate('EdicaoCategoria', {categoriaSelecionada: categoria})
  };

  const handleExcluirCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    navigation.navigate('ExclusaoCategoria', {categoriaSelecionada: categoria})
  };
  const handleEditarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    navigation.navigate('EdicaoCategoria', {categoriaSelecionada: categoria})
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.headerLeft}>
          <Image style={styles.headerLeftImg} source={require('../../assets/options_icon.png')} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image style={styles.headerCenterImg} source={require('../../assets/catalog_top.png')} />
        </View>

        <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.headerRightImg} source={require('../../assets/person_icon_white.png')} />
          <Text style={styles.headerRightText}>{user}</Text>
        </TouchableOpacity>
      </View>

      <Animatable.View
        animation="slideInUp"
        style={styles.containerForm}
        easing={'ease-out-back'}
        duration={1000}
        direction="alternate"
      >
        <View style={styles.smallLine}></View>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('CadastroCategoria')} //cadastrar modelo
          >
            <Text style={styles.buttonRegisterFont}>CADASTRAR NOVA CATEGORIA</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          {categorias.map((categoria) => (
            <View style={styles.containerCards} key={categoria.id}>



              <View style={styles.containerTitleCards}>
                <Text style={styles.titleCards}>{categoria.categoria}</Text>
                <Image style={styles.arrowRight} source={require('../../assets/arrow_right.png')}/>

                  <View style={styles.containerButtons}>    

                  <TouchableOpacity
                        style={styles.buttonEdit}
                        onPress={() => handleEditarCategoria(categoria)}
                      >
                        <Text style={styles.buttonEditFont}>Editar categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonExcluir}
                      onPress={() => handleExcluirCategoria(categoria)} 
                      >
                    <Text style={styles.textButtonExcluir}>Excluir categoria</Text>
                    </TouchableOpacity>

                    </View>


              </View>


              
              <View style={styles.buttonCardsA}>
                <View style={styles.buttonCardsB}>
                  <Image style={styles.buttonImage} source={{uri: categoria.url_img}} />
                </View>





                <View style={styles.containerDescription}>

                  <View style={styles.containerDescriptionAB}>

                    <View style={styles.containerDescriptionA}>
                      
                      <Text style={styles.textDescription}>{categoria.descricao}</Text>

                    </View>

                    <View style={styles.containerDescriptionB}>

<<<<<<< HEAD
                      <Text style={styles.modelDescription}>Modelos</Text>

                      <View style={styles.containerAmount}>

                          <Text style={styles.amountDescription}>{categoria.quantModel}</Text>


                          <View style={styles.containerDescriptionC}>
                            <TouchableOpacity
                              style={styles.buttonSee}
                              onPress={() => handleVerModelos(categoria)}
                            >
                              <Text style={styles.buttonSeeFont}>Ver modelos</Text>
                             </TouchableOpacity>
                          </View>

                      </View>

                    </View>

                  </View>


                </View>
=======
                     <Text style={styles.modelDescription}>Modelos</Text>

                     <Text style={styles.amountDescription}>{categoria.quantModel}</Text>

                    </View>

                  </View>

                  <View style={styles.containerDescriptionC}>

                    
                    <TouchableOpacity
                      style={styles.bottonExcluir}
                      onPress={() => handleExcluirCategoria(categoria)} 
                      >
                    <Text style={styles.textBottonExcluir}>Excluir</Text>
                    </TouchableOpacity>

                                        
                    <TouchableOpacity
                        style={styles.buttonEdit}
                        onPress={() => handleEditarCategoria(categoria)}
                      >
                        <Text style={styles.buttonEditFont}>Editar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.buttonSee}
                        onPress={() => handleVerModelos(categoria)}
                      >
                        <Text style={styles.buttonSeeFont}>Ver modelos</Text>
                    </TouchableOpacity>

                  </View>

                </View>

                {/* <Text style={styles.textDescription}>{categoria.descricao}</Text>
                  
                  <Text style={styles.modelDescription}>Modelos</Text>
                  <View style={styles.containerBottomDescription}>
                    <Text style={styles.amountDescription}>{categoria.quantModel}</Text>
                    
                    <TouchableOpacity
                      style={styles.buttonSee}
                      onPress={() => handleVerModelos(categoria)}
                    >
                      <Text style={styles.buttonSeeFont}>Ver</Text>
                    </TouchableOpacity>
                    
                  </View>

                  <View>
                  <TouchableOpacity
                      style={styles.bottonExcluir}
                      onPress={() => handleExcluirCategoria(categoria)} 
                      >
                  <Text style={styles.textBottonExcluir}>Excluir</Text>
                  </TouchableOpacity>
                  </View> */}


>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7

              </View>
            </View>
          ))}
        </ScrollView>
      </Animatable.View>
    </View>
  );

}