import React from 'react';
import {Actions, Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

import StudentList from './components/StudentList';

import StudentCreate from './components/StudentCreate';

import StudentUpdate from './components/StudentUpdate';


const RouterComponent = () => {
    
    return(
        <Router sceneStyle={{marginTop:30}}>
            <Scene key="kimlik">     

                               
                <Scene 
                        key="loginScreen" 
                        component={LoginForm} 
                        title="Giris Ekrani"/>  


                <Scene 
                    onRight={()=>Actions.studentCreate()}
                    rightTitle="Yeni"
                    key="studentList" 
                    component={StudentList} 
                    title="Öğrenci Listesi" />


                <Scene 
                    key="studentCreate" 
                    component={StudentCreate} 
                    title="Öğrenci Kaydet" />              
                    
                <Scene 
                    key="studentUpdate" 
                    component={StudentUpdate} 
                    title="Öğrenci Güncelle" /> 

            </Scene>         
 
        </Router>
    
    );

};
//export default Router;//böyle olmalı ama video da;
export default RouterComponent;//böyle