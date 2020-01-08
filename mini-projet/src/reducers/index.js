import {combineReducers} from 'redux';
import etudiantReducer from './etudiantReducer'
export default combineReducers({
    etudiant: etudiantReducer
})