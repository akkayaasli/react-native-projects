import React,{Component} from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {CardSection} from '../ortak';

class ListItem extends Component {
    ogrenciClick(){
        //Yeni butonuna verdiğimiz action ı yakalıyoruz.Güncelleme vs kullanıcaz.
        Actions.studentUpdate({student:this.props.ogrenci});//ogrencinin tüm bilgilerinin studentCreate gönder.

    }



    render(){
        const {isim,Soyisim}=this.props.ogrenci;
        return(
            <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {isim} {Soyisim}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ListItem;