import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1D1238',
    },
    
    containerLogo: {
      width: 190,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      resizeMode: 'contain',
      marginBottom: 21,
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
    
    buttonCards: {
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

    buttonIcons: {
      resizeMode: 'center',
    },

    buttonTexts: {
      fontWeight: '900',
      fontSize: 14,
      color: '#1D1238',
      letterSpacing: 0.5,
    },

  });

  export default styles;