//kimlik doğrulama sayfasoındaki action ları yakalıcaz.
//ilk email nin action nı yakalıcaz.
import {Alert} from 'react-native';

import {Actions} from 'react-native-router-flux';

import auth from '@react-native-firebase/auth';

import {EMAİL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL
        } from './types';



export const emailChanged=(email)=>{
    return (dispatch)=>{
        dispatch({
            type: EMAİL_CHANGED,
            //switch case yakalamak için verilen bir ad
            payload:email
            //4.46 da eslint de bir kural yazdı. Hata yoksa ben yazmıcam.
        });
    };
};

//ikinci password için action nı yakalıcaz.

export const passwordChanged=(password)=>{
    return (dispatch)=>{
        dispatch({
            //ne kadar reducers varsa hepsi atarnıyor.Uygun olan seçiliyor.
            type: PASSWORD_CHANGED,
            //switch case yakalamak için verilen bir ad
            payload:password
            //4.46 da eslint de bir kural yazdı. Hata yoksa ben yazmıcam.
        });
    };
};

export const loginUser=({email,password})=>{
    return(dispatch)=>{
        dispatch({type:LOGIN_USER})
        //boş olma durumu aşağıda sorgulama yapıcam:
        if(email==='' || password==='')
        {            
            Alert.alert(
                'Mesaj',
                'Her iki alanda dolu olmalıdır!',
                [
                    {
                        text:'Tamam', onPress:()=>null
                    }
                ]
            );
        }

        else
        {
        // console.log('email:'+this.state.email);
        //console.log('password:'+this.state.password);
        // auth().signInWithEmailAndPassword(this.state.email, this.state.password)-->

        auth().signInWithEmailAndPassword(email,password)
            .then(user => loginSuccess(dispatch,user))
            //eğer bir email ve password yoksa sorunu varsa catch bloğu içine girmesi sağlanır.
            .catch(()=>{

                 auth().createUserWithEmailAndPassword(email,password)
                 //mail ve password ile user ı oluştur.
            
                    //başarılı kayıt sağlandıysa
                    .then(user => loginSuccess(dispatch,user))

                    //mail ve password de bir hata varsa,
                    .catch(() => loginFail(dispatch));

        });
     }         
  };
};
const loginFail=(dispatch)=>{
    console.log(dispatch);
    Alert.alert(
        'Mesaj',
        'Girdiğiniz bilgiler hatalıdır!',
        [
            {
                text:'Tamam', onPress:()=>null
            }
        ]
    );
    dispatch({
        type:LOGIN_USER_FAIL,
    });
}




const loginSuccess=(dispatch,user)=>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        //type ların hepsi types.js de tanımlandı.
        payload:user
    });
    Actions.studentList();//giriş başarılıysa bu keye git.
    //Actions.main();//giriş başarılıysa bu keye git.
    //Actions.kimlik();//giriş başarılıysa bu keye git.
    
}








//bu sayfada her değişen kullanıcıda girilen değişik emailler alınıyor.