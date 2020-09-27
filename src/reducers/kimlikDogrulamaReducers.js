import {EMAİL_CHANGED,PASSWORD_CHANGED,LOGIN_USER, LOGIN_USER_SUCCESS,LOGIN_USER_FAIL} from '../actions/types';

const INITIAL_STATE={
    email:'',
    password:'',
    loading:false
};
export default (state=INITIAL_STATE,action)=>{
//kimlikDogrulamaActions.js de ki type ları yakalamamız gerekiyor.Ona göre yine aynı yerdeki payload değerlerini alıcaz.
    switch(action.type){
        case EMAİL_CHANGED:
            return {...state,email:action.payload};//state halihazırda ki mail, email:action.payload=yeni yazılan email state e aktarılıyor. Artık yeni durum oluyor.
        case PASSWORD_CHANGED:
            return {...state,password:action.payload};

        case LOGIN_USER:
            return {...state,loading:true};
        case LOGIN_USER_SUCCESS:
            return{...state,loading:false};

        case LOGIN_USER_FAIL:
            return{...state, loading:false};
        //break;
        default:
            return state;
    }
};