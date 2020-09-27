import React, {Component} from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';//bu kod reducers içindeki index.js i çalıştıracak.
//import LoginForm from './components/LoginForm'; router oluşturduk bu sayfada buna gerek kalmadı.



import Router from './Router';


//PROVİDER ile projeyi tamamen kapladık.
//firebase kullandığımız için bir class oluşturup Component aktive ettik.

class Main extends Component{


   /* componentDidMount()
    {
        //uygulamamız ilk açıldığında firebase bulut servisine bağlanarak gerekli konfigürasyon işlemleri yapılıyor:
    }*/

//provider lara gönderilen store ların dengelenmesi redux thunk ile sağlanıyor.Dispatch ile kurulan action createrler thunk ile yapılır.
    render(){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Router/>
                </View>
            </Provider>
    
    
        );
    }
}


export default Main;