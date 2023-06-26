import { StyleSheet } from "react-native";
// #####ORIGINAL
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

  
  containerAB: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    height: 75,
    marginBottom: 10,
  },

  containerA: {
    width: '35%',
    justifyContent: 'space-between',
    // backgroundColor: 'purple',
    height: 75,
  },

  inputBackgroundA: {
    height: '65%',
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },

  containerB: {
    width: '55%',
    justifyContent: 'space-between',    
    // backgroundColor: 'blue',
    height: 75,
  },

  inputBackgroundB: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    resizeMode: 'contain',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  containerCD: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    height: 75,
    marginBottom: 20,
  },

  containerC: {
    width: '55%',
    justifyContent: 'space-between',
    // backgroundColor: 'purple',
    height: 75,
  },

  inputBackgroundC: {
    height: '65%',
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },

  containerD: {
    width: '35%',
    justifyContent: 'space-between',    
    // backgroundColor: 'blue',
    height: 75,
  },

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


  titleCards:{
    fontSize: 16,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: '2%',
    // backgroundColor: 'red',
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
    flexDirection: 'column',
    // backgroundColor: 'green',
    marginLeft: 54,
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
    flex: 2,
    fontSize: 12,
    color: '#1D1238',
    paddingRight: 5,
    paddingLeft: 10,
    // backgroundColor: 'blue',
    fontSize: 15,
    fontWeight: '900', 
  },

  modelDescription: {
    fontSize: 15,
    color: '#1D1238',
    marginLeft: 6,
    fontWeight: '900',
    // marginBottom: -5,
    // backgroundColor: 'blue'
  },

  amountDescription: {
    // backgroundColor: 'red',
    fontSize: 25,
    color: '#FF7B02',
    marginLeft: 6,
    fontWeight: '900',
    // marginTop: -8,
    // marginBottom: 5,
    // lineHeight: 40,
  },

  containerCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'red'
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
    justifyContent: 'center',
    alignSelf: 'center',
    
  },

  buttonImage: {
    // flex: 1,
    width: '25%',
    height: '70%',
    marginLeft: '5%',
    resizeMode: 'contain',
    // backgroundColor: 'purple',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  textButtonImage: {
    marginTop: -20,
    alignSelf: 'center',
    paddingLeft: 28,
  },

  buttonTexts: {
    fontWeight: '900',
    fontSize: 14,
    color: '#1D1238',
    letterSpacing: 0.5,
  },

  buttonInclude: {
    fontSize: 50,
    backgroundColor: '#D4F8E7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1FB76F',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  buttonIncludeFont: {
    fontSize: 12,
    color: '#1FB76F'
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
    flex: 5,
    height: 80,
    padding: 12,
    fontSize: 17,
    letterSpacing: 0.5,
    // backgroundColor: 'purple',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top',
    color: '#3E3E3E',
    fontWeight: 'bold',
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
  
  button: {
    backgroundColor: '#1D1238',
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

});

export default styles;