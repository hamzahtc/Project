import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getEtudiants} from '../actions/etudiantActions';
import axios from 'axios';
import './Accueil.css'
class Accueil extends Component {
    componentDidMount(){
        
        axios.get('http://localhost:5000/etudiants')
        .then(res => this.props.getEtudiants(res.data));  
        
    }
    
    
    render() {
        return (
            <div>
                <div class="md-form">
                <input type="text" id="form1" class="form-control"/>
                <label for="form1">Example label</label>
                </div>
</div>

                
        )
    }
}


export default connect(null,{getEtudiants})(Accueil);