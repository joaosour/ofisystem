import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1238',
  },

  containerHeader: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 14,
    marginRight: 14,
  },

  titleCards:{
<<<<<<< HEAD
    fontSize: 16,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: '2%',
    // backgroundColor: 'red',
=======
    fontSize: 22,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: 10,
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
  },
  
  headerLeft: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    height: 48,
    width: 80,
  },

  headerLeftImg: {
    height: 15,
    width: 20,
  },

  headerCenter: {
    // backgroundColor: 'red',
    height: 48,
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerCenterImg: {
    // backgroundColor: 'purple',
    height: 48,
    width: 170,
    resizeMode: 'contain',
  },

  headerRight: {
    flexDirection: 'row-reverse',
    // backgroundColor: 'green',
    height: 48,
    width: 80,
    alignItems: 'flex-start',
  },

  headerRightText: {
    flex: 3,
    height: 18,
    fontSize: 14,
    color: 'white',
    // backgroundColor: 'blue',
    textAlign: 'right',
    // paddingTop: 5,
    },

  headerRightImg: {
    flex: 1,
    // backgroundColor: 'yellow',
    height: 17,
    width: '100%',
    marginLeft: 5,
    resizeMode: 'center',
    marginBottom: 34,
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  
  containerDescription: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginLeft: 54,
    justifyContent: 'space-between',
  },

<<<<<<< HEAD
  containerD: {
    width: '100%',
    justifyContent: 'space-between',    
    // backgroundColor: 'blue',
    height: 75,
    
  },
  containerCD: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    height: 75,
    marginBottom: 20,
  },

=======
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7
  containerDescriptionText: {
    flex: 1,
    //backgroundColor: 'red',
  }, 

  containerDescriptionAmount: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  containerDescriptionAmountA: {
    flex: 4,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },

  containerDescriptionAmountB: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerBottomDescription: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 5,
    
  },

  containerCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: -10,
  },

  modelDescription: {
    color: '#8F9297',
    fontSize: 15,
  },

  nameModelDescription: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1D1238',
    marginBottom: 35,
  },

  subtotalDescription: {
    fontSize: 15,
    color: '#8F9297',
    paddingTop: 17,
  },
  modeloSelect: {
    fontSize: 15,
    color: '#FF7B02',
    //marginLeft: 6,
    fontWeight: '900',
    marginBottom: 10,
  },

  bottomAddRemove: {
    backgroundColor: '#1D1238',
    height: 25,
    width: 25,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    
   },

   amountInput: {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    color: '#1D1238',
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#1D1238',
   },

   bottomAddRemoveText: {
    color: 'white',
    fontWeight: '900',
    bottom: 1,
   },

   buttonAddCart: {
    width: '100%',
    height: 30,
    borderRadius: 3,
    color: 'red',
    backgroundColor: '#FFF6ED',
    borderWidth: 1,
    borderColor: '#FF7B02',
    fontWeight: '900',
    bottom: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
   },

   textValueAmount: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF7B02',
    bottom: 8,
    // backgroundColor:  'red',
    paddingRight: 10,
   },
   bottonEditar: {
    width: 100,
    backgroundColor: '#ffbdb9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1FB76F',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: -65,
    marginEnd: 8,

   },
   bottonExcluir: {
    width: 110,
    backgroundColor: '#ffbdb9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: -65,
    marginEnd: 8,
   },
    textBottonEditar: {
      fontSize: 12,
      color: '#1FB76F',
    },
    textBottonExcluir: {
      fontSize: 12,
      color: '#FF0909',
    },

   fontButtonAddCart: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FF7B02',
   },
  
    smallLine: {
      width: 40,
      height: 7,
      alignSelf: 'center',
      backgroundColor: '#1D1238',
      borderRadius: 50,
      marginTop: 25,
      marginBottom: 15,
    },

  headerBottons: {
    height: 25,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
  },

  buttonRegister: {
    width: 105,
    backgroundColor: '#D4F8E7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1FB76F',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },


  buttonRegisterFont: {
    fontSize: 12,
    color: '#1FB76F'
  },

  buttonCardsA: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 21,
    shadowColor: '#C1C1C1',
    elevation: 30,
    // alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  
  buttonCardsB: {
    width: 80,
    height: 110,
    backgroundColor: '#F9F9F9',
    borderRadius: 21,
    // shadowColor: '#C1C1C1',
    alignItems: 'center',
    // resizeMode: 'contain',
    // justifyContent: 'center',
  },

  buttonImage: {
    marginLeft: 30,
    width: '150%',
    height: '100%',
    resizeMode: 'center'
    // resizeMode: 'center',
    // backgroundColor: 'red'
  },

  buttonTexts: {
    fontWeight: '900',
    fontSize: 14,
    color: '#1D1238',
    letterSpacing: 0.5,
  },

  buttonSee: {
    fontSize: 50,
    backgroundColor: '#FFF6ED',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF7B02',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  buttonSeeFont: {
    fontSize: 12,
    color: '#FF7B02'
  },
  title: {
    fontSize: 19,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: 2,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center'
  },
  text: {
    fontSize: 12,
    color: '#8C8C8C',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

    
  logoIcon: {
    marginTop: 10,
    marginBottom: 10,
    width: 90,
    height: 90,
    alignSelf: 'center'
  },
  input: {
  
    height: 15,
  },
  input1: {
  
    height: 15,
  },
  inputTitle1: {
    fontSize: 18,
    color: 'red',
    fontWeight: '900', 
    marginTop: 0,
    marginBottom: 8,
    //marginLeft: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
<<<<<<< HEAD
  inputBackgroundD: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    resizeMode: 'contain',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
      
  inputCategoria: {
    flex: 1,
    fontSize: 17,
    padding: 12,
    height: 40,
    paddingRight: 4,
    fontWeight: 'bold',
    backgroundColor: '#F4F4F4',
    color: '#3E3E3E',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF7B02',
    height: 50,
    width: '100%',
    fontSize: 16,
    marginBottom: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    

  },

  buttonText: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold'
  },

  popupErrorText: {
    fontSize: 15,
    color: '#EA4335',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFF',//'#EA4335',
    marginTop: 5,
    borderRadius: 10,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    textAlignVertical: 'center'
  },
=======
>>>>>>> 9dc045f259d299b0d067ce86a600634284b94db7


});

export default styles;