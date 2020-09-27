import React, {Component} from 'react';
import {TextInput,Alert,View} from 'react-native';

import {connect} from 'react-redux';//redux yapısının 5 özelliğinden sonuncusu connect özelliğiydi.

import {emailChanged,passwordChanged,loginUser} from '../actions';


import {ButtonDesign,Card,CardSection,Spinner} from '../ortak/index';




//aşağıdakiler index.js den alıcaz onun için kaldırıyoruz.Yerine yukarıdaki kodu ekliyoruz.
//import Button from '../ortak/ButtonDesign';
//import Card from '../ortak/Card';
//import CardSection from '../ortak/CardSection';
//import Spinner from '../ortak/Spinner';




class LoginForm extends Component {//export normalde sonda idi ama böylede bir kullanımı var.Çalışıyor.

    clickLogin() {
       //console.log('loginnnn');

       const {email,password}=this.props;
       console.log(email, password);
       this.props.loginUser({email,password});
    }
    

    renderButton()
    {
        //FALSE İSE;
        if (!this.props.loading)
        {
            return <ButtonDesign 
                onPress={() =>
                {
                    this.clickLogin();
                }
            }
                >GİRİŞ</ButtonDesign>;
        }

        //TRUE İSE;
        return <Spinner size="small"/>;
    }



    render() {
        //console.log('response email'+ this.props.email);
        //console.log('response password'+ this.props.password);
        const {inputStyle}=styles;
        return(
            <View style={{flex:1, backgroundColor:'white',}}>
                <Card >
                    <CardSection >

                        <TextInput
                            placeholder="E-mail"
                            style={styles.inputStyle}
                            value={this.props.email}//value ile verileri firebase e göndericez.Bunu için yukarda bilgilerin tutulduğu bir state yapısı oluşturuyoruz.
                            //aşağıda oluşturduğum props ile ilgili metot içinden aldım.
                            onChangeText={email=> this.props.emailChanged(email)}//email gelen emaile eşitleniyor.
                        />

                    </CardSection>

                

                    <CardSection>

                    <TextInput
                            secureTextEntry//şifre noktalı olsun.
                            placeholder="Şifre"
                            style={styles.inputStyle}
                            value={this.props.password}//value ile verileri firebase e göndericez.Bunu için yukarda bilgilerin tutulduğu bir state yapısı oluşturuyoruz.
                            //aşağıda oluşturduğum props ile ilgili metot içinden aldım.
                            onChangeText={password=>this.props.passwordChanged(password)}
                        />

                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                </Card>
            </View>
        );
    }
}

const styles = {

  
    inputStyle://uygulamada gireceğimiz input
    {
        color:'#ED4C67',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
};

//state leri props lara map et.
const mapStateToProps=({kimlikDogrulamaResponse})=>
{
    const {email,password,loading}=kimlikDogrulamaResponse;
    return {
        email:'gecisyap@gmail.com',
        password:'654321',
        loading
    };
};
//kimlikdogrulama altındaki emailChanged ve passwordChanged e aşağıdaki şekilde ulaşıyoruz.
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);
