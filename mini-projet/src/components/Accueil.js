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
            <div className="container" style={{textAlign:"center"}}>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                            <i class="fas fa-cog fa-spin fa-10x" style={{color:'#3f729b'}}></i>
                        </div>

                
        )
    }
}


export default connect(null,{getEtudiants})(Accueil);