import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      backgroundColor: "lightcyan",
      justifyContent: "center",
    },

    title: {
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    button:{
      fontSize:18,
      textAlign:"center",
      padding:4,
      margin:10,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'black',
      borderColor: 'white',
    },

    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: "center",
    },

    textImport: {
      fontSize: 17,
      textAlign: "center",
    },

    input:{
        borderWidth:2,
        borderStyle:"solid",
        borderRadius: 15,
        margin:10,
        paddingTop: 10,
        paddingBottom: 10, 
        fontSize: 20,
    },

    texto:{
        fontSize: 20,
        textAlign: "center",
        color: 'black',
        marginTop: 10,
    },

    card:{
      height: 500, 
    },

    borrar:{
      fontSize:18,
      position:"absolute",
      marginLeft:330,
      padding:5,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'red',
      borderColor: 'white',
    },

    nombres: {
      textAlign: "center",
      fontSize: 25,
    },

    acercaDe: {
      backgroundColor: "lightcyan",
      flex: 1,
      justifyContent: "center",
    },

    tarjeta:{ 
      borderWidth:2,
      borderStyle:"solid",
      padding:10,
      margin:10,
      borderRadius:30,
      backgroundColor:"lavender",
    },

    imagen: {
      width: 100,
      height: 100,
      alignSelf: "center",
      borderRadius: 100,
    },

    drawerStyle : {
      backgroundColor: "black",
      width: 250,
    },
    
    iconoComentar: {
      width: 50,
      height: 50,

    },

    iconoVerDetalle: {
      width: 45,
      height: 45,

    },
    
    iconos: {
      flexDirection: "row",
      marginTop: 10,
      alignSelf: "center"
    },

    modalContenedor: {
      justifyContent: "center", 
      alignItems: "center",
      flex: 1,
    },
 
    verDetalle: {
      fontSize: 30,
      textAlign: "center",
      backgroundColor: "lightcyan",
      height: 250,
      width: 400,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      borderWidth: 1,
      borderStyle:"solid",
    }
})

export default styles