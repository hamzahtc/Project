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
        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua  </p>
        </div>
        <div className="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
      <iframe width="853" height="480" src="https://www.youtube.com/embed/tXL0Ezw4z9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
        </div>
        <div className="col-md-12">
            
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