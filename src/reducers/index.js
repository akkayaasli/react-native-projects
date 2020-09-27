import {combineReducers} from 'redux';

import kimlikdogrulamaReducers from './kimlikDogrulamaReducers';

import StudentListReducers from './StudentsCreateReducers';

import StudentDataReducers from './StudentDataReducers';

import StudentUpdateReducers from './StudentUpdateReducers';




export default combineReducers(
    {
       kimlikDogrulamaResponse:kimlikdogrulamaReducers,
       studentListRespone:StudentListReducers,
       studentDataResponse:StudentDataReducers,
       studentUpdateResponse:StudentUpdateReducers
    }
);