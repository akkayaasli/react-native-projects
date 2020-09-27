import React from 'react';
import {View} from 'react-native';


const CardSection =(props)=>{//kullanacağımız yere göre değişiklik göstermemiz gerektiğinde props kullanıyoruz.

    return(

        <View style={styles.subContainerStyle}>

            {props.children}

        </View>
    );

};

const styles = {
  
    subContainerStyle:
    {
        borderBottomWidth:1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
};

export {CardSection};