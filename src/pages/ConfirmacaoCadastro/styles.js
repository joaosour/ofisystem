import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({

    modalBackground: {
      backgroundColor: 'white',
      marginLeft: 30,
      marginRight: 30,
      width: '80%',
      height: 330,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      top: 270,
    },

    modalContent: {
      // marginLeft: 30,
      // marginRight: 30,
      // width: '73%',
      height: 250,
      backgroundColor: 'white',
      padding: 25,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      top: 40,
      borderWidth: 1,
      borderColor: '#1D1238',
    },
    
    modalText: {
      fontSize: 23,
      textAlign: 'center',
    },
  
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
      marginTop: 10,
      marginBottom: 20,
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
    
    inputContainer: {
      flex: 1,
      height: 50,
      marginLeft: 30,
      marginRight: 30,
      padding: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      flexDirection: 'row',
  
  
    },
    inputContainerFocused: {
      flex: 1,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 1,
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 14,
  
    },
  
    logoIcon: {
      marginTop: 10,
      marginBottom: 10,
      width: 90,
      height: 90,
      alignSelf: 'center'
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
  
    title: {
      fontSize: 19,
      color: '#1D1238',
      fontWeight: '900',
      marginBottom: 2,
      alignContent: 'center',
      alignSelf: 'center',
      textAlign: 'center'
    },
  
    inputTitle: {
      fontSize: 14,
      color: '#3E3E3E',
      fontWeight: '900', 
      marginTop: 0,
      marginBottom: 8,
      marginLeft: 30,
  
    },
  
    inputImage: {
      height: 20,
      width: 20,
      resizeMode: 'center',
    },
    
    input: {
      flex: 1,
      height: 50,
      paddingLeft: 10,
      paddingRight: 10,
      // backgroundColor: 'red',
    },
  
    text: {
      fontSize: 12,
      color: '#8C8C8C',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    
    buttonBack: {
      top: 100,
      backgroundColor: '#1D1238',
      height: 50,
      width: 270,
      fontSize: 16,
      //marginTop: -15,
      marginBottom: 7,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  
    button: {
      backgroundColor: '#1D1238',
      height: 50,
      fontSize: 16,
      marginTop: 15,
      marginBottom: 7,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
      // width: '80%',
      fontSize: 13,
      color: '#FFF',
      fontWeight: 'bold'
    },
  
    registerOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: '6%',
  
    },
  
    registerOptionsText: {
      fontWeight: '900',
  
    },
  
  });

  export default styles;