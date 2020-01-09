import React, { Component } from 'react'
import {connect} from 'react-redux';
import Etudiant from './Etudiant'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getEtudiants} from '../../actions/etudiantActions';

class ListeEtudiants extends Component {
  state ={
    rechercheEtud : []
  }
  componentDidMount(){
        
    axios.get('http://localhost:5000/etudiants')
    .then(res => this.props.getEtudiants(res.data)); 
    

    
}
    

    render() {
        return (
            <div className="container">
                <br></br>
              <Link class="btn btn-info btn-sm" to="/addEtudiant" style={{marginBottom:"30px"}}><i class="fas fa-plus"></i></Link>
        
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">CNE</th>
                    <th scope="col" ></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.etudiants.map((etudiant)=>{
                      return(
                          <Etudiant etudiant={etudiant}></Etudiant>
                            )
                      })
                }
                </tbody>
              </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        etudiants : state.etudiant.etudiants
    }
}

export default connect(mapStateToProps,{getEtudiants})(ListeEtudiants);