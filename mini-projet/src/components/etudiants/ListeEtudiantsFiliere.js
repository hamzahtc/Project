import React, { Component } from 'react'
import {connect} from 'react-redux';
import Etudiant from './Etudiant'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getEtudiants} from '../../actions/etudiantActions';
class ListeEtudiantsFiliere extends Component {
    state ={
        rechercheEtud : [],
        tabFiliere : [],
        filiere : ''
      }
    componentDidMount(){
        
        axios.get('http://localhost:5000/etudiants')
        .then(res => this.props.getEtudiants(res.data));
        axios.get('http://localhost:5000/filieres')
        .then(res => this.setState({
          tabFiliere : res.data
        }));
    }
    onChangeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
          })
    }
    render() {
        return (
            <div className="container">
            <br></br>
          <div className="row">
              <div className="col-md-10">
                  <select class="form-control" name="filiere" onChange={this.onChangeInput} placeholder="Filiere">
                  <option disabled selected>Filiere</option>
                  {
                    this.state.tabFiliere.map(filiere => {
                      return(
                        <option>{filiere.filiere}</option>
                      )
                    })
                  }
            </select>
            </div>
              <div className="col-md-2">
              <Link class="btn btn-info btn-sm" to={"/listeetudiants/"+this.state.filiere} style={{marginBottom:"30px"}}>Rechercher</Link>

              </div>

        <div className="col-md-1">
        <Link class="btn btn-info btn-sm" to="/addEtudiant" style={{marginBottom:"30px",position: 'fixed'}}><i class="fas fa-plus"></i></Link>

        </div>
        <div className="col-md-11">
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
                  this.props.etudiants.filter(etudiant => etudiant.filiere === this.props.match.params.filiere).map((etudiant)=>{
                      return(
                          <Etudiant etudiant={etudiant}></Etudiant>
                            )
                      })
            }
            </tbody>
          </table>
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

export default connect(mapStateToProps,{getEtudiants})(ListeEtudiantsFiliere);