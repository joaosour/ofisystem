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
  
  containerCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red'
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
    width: 155,
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 21,
    shadowColor: '#C1C1C1',
    elevation: 30,
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  
  buttonCardsB: {
    width: 155,
    height: 80,
    backgroundColor: '#F9F9F9',
    borderRadius: 21,
    shadowColor: '#C1C1C1',
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  buttonIcons: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    // backgroundColor: 'red'
  },

  buttonTexts: {
    fontWeight: '900',
    fontSize: 14,
    color: '#1D1238',
    letterSpacing: 0.5,
  },

});

export default styles;