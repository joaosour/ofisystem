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
    fontSize: 22,
    color: '#1D1238',
    fontWeight: '900',
    marginBottom: 10,
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

  headerBottons: {
    height: 25,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
  },

  buttonRegister: {
    width: 120,
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
    // backgroundColor: 'red',
  },
  
  containerDescriptionA: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  
  containerDescriptionB: {
    flex: 1,
    // backgroundColor: 'blue',

  },
  
  containerDescriptionC: {
    flex: 3,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    marginRight: 10,
  },

  containerBottomDescription: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 5,
  },

  textDescription: {
    flex: 1,
    fontSize: 12,
    color: '#8F9297',
  },

  modelDescription: {
    fontSize: 15,
    color: '#1D1238',
    fontWeight: '900',

  },

  amountDescription: {
    fontSize: 25,
    color: '#FF7B02',
    fontWeight: '900',

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
    backgroundColor: '#E5FBF1',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#2ADB86',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    
  },

  buttonSeeFont: {
    fontSize: 12,
    color: '#2AD86'
  },

  buttonEdit: {
    fontSize: 50,
    height: 18,
    backgroundColor: '#F0EDF9',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#1D1238',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  buttonEditFont: {
    fontSize: 12,
    color: '#1D1238'
  },

  textBottonExcluir: {
    fontSize: 12,
    color: '#F93F17',
  },

  bottonExcluir: {
    fontSize: 50,
    height: 18,
    backgroundColor: '#FFEEEB',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#F93F17',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
   },

});

export default styles;