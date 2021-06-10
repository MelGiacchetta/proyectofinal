import React, { Component } from 'react';
import { render } from 'react-dom';
import {getData} from '../api/RandomUsers';

import {
    View, 
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

class Screen_FlatList extends Component{
    constructor(){
        super();
        this.state = {
            api: [],
        }
    }  
    // componentDidMount(){
    //     getData()
    //     .then( (usuarios) => {
    //         console.log(usuarios);
    //         this.setState({usuarios: usuarios});
    //     })
    // }
    async getData(){
        try {
          const resultado = await AsyncStorage.getItem("Api");
          this.setState({api: JSON.parse(resultado)})
          console.log(this.state.api)
        } catch(e){
          console.log(e)
        }
      }
        
    renderItem = ({usuario}) => {
        return (

        <View style = {styles.card}>
            <Text style={styles.texto}>Los usuarios son: {usuario.name.first},{usuario.name.last}</Text>
        </View>
                )
    }
    keyExtractor = (item, idx) => idx.toString()

render(){
    return(
        <View style={styles.container}>
            <FlatList
            data = {this.state.usuarios}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            />
        </View>
    )
}}
 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lavender",

    },
    texto: {
        fontSize: 15,
    }, 
    card:{
        backgroundColor:"mistyrose",
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:1,
        margin:5,
      },
})

export {Screen_FlatList};