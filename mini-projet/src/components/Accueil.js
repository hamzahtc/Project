import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getEtudiants} from '../actions/etudiantActions';
import axios from 'axios';
import './Accueil.css';
import Statistique from './Statistique'
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
            <h3 class="h3 text-center mb-5">L'Ecole Superieure de Technologie d'Essaouira</h3>
            <br></br>
            <br></br>
    <div className="row">
        <div className="col-md-6">
        <h5 class="feature-title">ESTE</h5>
        <p class="grey-text">L’École Supérieure de Technologie d'Essaouira (ESTE),
         créée en 2005, est une école marocaine d'enseignement supérieur public. Elle 
         fait partie du réseau des écoles supérieures de technologie et relève de l'Université Cadi Ayyad.  </p>
        </div>
        <div className="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
      <iframe width="853" height="480" src="https://www.youtube.com/embed/tXL0Ezw4z9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
        </div>
        
        <div className="col-md-12" style={{marginTop:"50px"}}>
        <h3 class="h3 text-center mb-5">Formation</h3>
        </div>
        <div className="col-md-12">
        L'École Supérieure de Technologie d'Essaouira (ESTE) dispense en deux ans une formation universitaire et technologique. Cette formation est sanctionnée par le Diplôme universitaire de technologie (DUT).
        <br></br>
        </div>
        <div className="col-md-3">
        Génie informatique : Génie logiciel
        </div>
        <div className="col-md-3">
        Techniques de management
        </div>
        <div className="col-md-3">
        Énergies renouvelables
        </div>
        <div className="col-md-3">
        Gestion des Organisations des Destinations Touristiques 
        </div>
        
    </div>
    </div>
    
                
        )
    }
}

const mapStateToProps = (state) => {
    return{
        etudiants : state.etudiant.etudiants
    }
}
export default connect(mapStateToProps,{getEtudiants})(Accueil);