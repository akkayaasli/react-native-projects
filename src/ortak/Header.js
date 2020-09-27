import React from 'react';
import {Text, View} from 'react-native';//oluşturulan her companent buraya kesinlikle eklenir.

//dinamik bir header yapmak için props özelliğinden yararlanırız.

const Header = ({headerText}) => {

    const {textStyle, viewStyle}=styles;//ileride çok fazla style olacağından bu şekilde bir yapı kullanıyoruz.

    return(
        <View style={viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );
};

//bir metot oluşturuyoruz.Yukarıda kullanıcaz.
const styles = {
    textStyle: {
        fontSize: 25,
        color:'#17c0eb',
       
      
        
    },
    viewStyle: {
        backgroundColor: '#f7f1e3',
        height:60,
        padding: 20,

        justifyContent:'center',
        alignItems: 'center',

        marginTop: 20,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,

        
    }
};
export default Header;