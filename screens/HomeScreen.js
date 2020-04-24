import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Picker, Image } from 'react-native';
import Languages from '../components/languages.json';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import * as firebase from 'firebase'

export default class HomeScreen extends Component {   
    
    constructor(props) {
       super(props);
       this.state = {
           languageFrom: "",
           languageTo: "",
           languageCode: 'en',
           inputText: "",
           outputText: "",
           submit: false,
       };
   }  
    
    signOutUser = () => {
        firebase.auth().signOut();
    }

   
   render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google,'AIzaSyA6Hd7o9ZBCqR-gbb31MV_pfG3n8utfwLY',this.state.languageCode);

       return (

           <View style = {styles.container}>

               <View style={styles.input}>
                   <TextInput
                       style={{flex:1, height: 80}}
                       placeholder="Enter Text Auto Detect"
                       underlineColorAndroid="transparent"
                       onChangeText = {inputText => this.setState({inputText})}
                       value={this.state.inputText}
                   />
               </View>  

               <Picker
                    selectedValue={this.state.languageTo}
                    onValueChange={ lang => this.setState({languageTo: lang, languageCode: lang})}
               >
                   {Object.keys(Languages).map(key => (
                        <Picker.Item label={Languages[key]} value={key} />
                   ))}
               </Picker>   

             <View style = {styles.output}>
                 {this.state.submit && <PowerTranslator  text={this.state.inputText} />}
              </View>

               <TouchableOpacity
                   style = {styles.button}
                   onPress = {this.handleTranslate}
               >
                   <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>


                
                <View style={styles.logout}>

                    <TouchableOpacity   style = {styles.logoutButton} onPress={this.signOutUser}>
                        <Text>Cikis</Text>
                    </TouchableOpacity>
                </View>

           </View>



       )
   }
}


const styles = StyleSheet.create({
   container: {
       paddingTop: 53
   },
   input: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       // height: 40,
       borderRadius: 5 ,
       margin: 10
   },
   output: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       borderRadius: 5 ,
       margin: 10,
       height: 80,
   },
   submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       borderRadius: 5 ,
       height: 40,
   },
   submitButtonText:{
    color: "#FFF",
    fontWeight: "500"
   },
   button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems:"center",
    justifyContent: "center",
    },
    logout:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton:{
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems:"center",
        justifyContent: "center",
        marginTop:120,
    }
})



