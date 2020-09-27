import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {Actions} from 'react-native-router-flux';

import {
    STUDENT_CHANGED,
    CREATE_REQUEST,
    CREATE_REQUEST_SUCCESS,
    STUDENT_LIST_DATA_SUCCESS,
    UPDATE_REQUEST,
    UPDATE_REQUEST_SUCCESS,
    DELETE_REQUEST,
    DELETE_REQUEST_SUCCESS} from './types';


//kullanıcının STUDENT_CHANGED metotu ile propsu alınıyor.


export const student_Change=({props,value})=>
{
    return(dispatch)=>{
        dispatch({
            type:STUDENT_CHANGED,
            payload:{props,value}//kullanıcıdan gelen props ve gelen value yi göndericez.
        });
    };
};
//ögrenci ekleme
export const studentCreate=({isim,Soyisim,ogrenciNumara,sube})=>
{   
    const { currentUser } = auth();   
    return (dispatch)=>{
        dispatch({type:CREATE_REQUEST});       

        database()
            .ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
            .push({isim,Soyisim,ogrenciNumara,sube})
                .then(() => {                
                    dispatch({type: CREATE_REQUEST_SUCCESS});
                    Actions.pop();//KAYDET butonuna basınca, önceki sayfaya dönüş sağlanacak.
                })                
        };
};




//ÖGRENCİ LİSTELEME
export const studentListData=()=>{
    const {currentUser}=auth();
    
    return(dispatch)=>{
        database()
            .ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
            .on('value',snapshot=>{
                dispatch({type:STUDENT_LIST_DATA_SUCCESS,payload:snapshot.val()});
            })
    }
}

//ÖGRENCİ GÜNCELLE
export const studentUpdate=({isim,Soyisim,ogrenciNumara,sube,uid})=>
{   
    const { currentUser } = auth();   
    return (dispatch)=>{
        dispatch({type:UPDATE_REQUEST});       

        database()
            .ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
            .set({isim,Soyisim,ogrenciNumara,sube})
                .then(() => {                
                    dispatch({type: UPDATE_REQUEST_SUCCESS});
                    Actions.pop();//KAYDET butonuna basınca, önceki sayfaya dönüş sağlanacak.
                })                
        };
};


//ÖGRENCİ SİL
export const studentDelete=({uid})=>
{   
    const { currentUser } = auth();   
    return (dispatch)=>{
        dispatch({type:DELETE_REQUEST});       

        database()
            .ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
            .remove()
                .then(() => {                
                    dispatch({type: DELETE_REQUEST_SUCCESS});
                    Actions.pop();//KAYDET butonuna basınca, önceki sayfaya dönüş sağlanacak.
                })                
        };
};