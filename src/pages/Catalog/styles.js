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
    flex: 1,
    fontSize: 12,
    color: '#8F9297',
    marginLeft: 6,
    paddingRight: 5,
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
  }

});

export default styles;