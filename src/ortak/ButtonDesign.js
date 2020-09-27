import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const ButtonDesign= ({onPress,children})=>{

    const{buttonStyleMethod,textStyle}=styles;
    return(

      //<TouchableOpacity onPress={()=>console.log('butona tıkladınnnnn')} /*style={buttonStyleMethod}*/ >

      //<TouchableOpacity onPress={()=>console.log('butona tıkladınnnnn')} style={buttonStyleMethod} >


      //children ve onPress özelliklerini kullanrak buton heryerde kullanabileceğimiz bir custom buton yaptık.
      
      <TouchableOpacity onPress={onPress} style={buttonStyleMethod} >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
};

const styles={

    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,       

    },


    buttonStyleMethod:{
        alignSelf:'stretch',//buton kendini genişletsin.
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
      
    }
   
};

export {ButtonDesign};

