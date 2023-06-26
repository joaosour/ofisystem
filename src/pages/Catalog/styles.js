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

  containerTitleCards: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerButtons: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'green',
    marginRight: 10,
  },

  titleCards:{
    fontSize: 22,
    color: '#1D1238',
    fontWeight: '900',
    letterSpacing: 0.5,
    // marginBottom: 10,
  },

  arrowRight: {
    resizeMode: 'contain',
    width: '3.5%',
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

  buttonRegister: {
    height: 25,
    width: '97%',
    backgroundColor: '#1D1238',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1D1238',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },


  buttonRegisterFont: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
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
    // backgroundColor: 'blue',
    marginLeft: 54,
    justifyContent: 'space-between',
  },
  
  containerDescriptionAB: {
    flex: 6,
    marginTop: '6%',
    // backgroundColor: 'red',
  },
  
  containerDescriptionA: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  
  containerDescriptionB: {
    flex: 1.2,
    // backgroundColor: 'blue',

  },
  
  containerDescriptionC: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },

  containerBottomDescription: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 5,
  },

  textDescription: {
    flex: 1,
    width: '98%',
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#8F9297',
    // backgroundColor: 'purple'
    padding: 1,
  },

  modelDescription: {
    fontSize: 20,
    letterSpacing: 0.5,
    color: '#1D1238',
    fontWeight: '900',

  },

  containerAmount: {
    // flex: 1,
    flexDirection: 'row',
  },

  amountDescription: {
    flex: 1,
    fontSize: 25,
    color: '#FF7B02',
    fontWeight: '900',
    // backgroundColor: 'purple'
  },

  containerCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: -10,
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
  
  buttonCardsA: {
    flexDirection: 'row',
    width: '100%',
    height: 115,
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
    width: '200%',
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
    height: 18,
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#1D1238',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    
  },

  buttonSeeFont: {
    fontSize: 10,
    color: '#1D1238',
    fontWeight: 'bold',
  },

  buttonEdit: {
    height: 20,
    paddingHorizontal: '5%',
    backgroundColor: '#1D1238',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonEditFont: {
    fontSize: 10,
    color: '#fff'
  },

  textButtonExcluir: {
    fontSize: 10,
    color: '#fff',
  },

  buttonExcluir: {
    fontSize: 50,
    height: 20,
    paddingHorizontal: '5%',
    backgroundColor: '#FF7B02',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
   },

});

export default styles;