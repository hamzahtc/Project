import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {getEtudiants} from '../actions/etudiantActions';
import ChartGender from './ChartGender';
import ChartFiliere from './ChartFiliere';
class Statistique extends Component {
    state = {
        tabFiliere : [],
        tabNomFiliere : [],
    }
    componentDidMount(){
        let tab = [];
        let tabEtudiant =  [];
        axios.get('http://localhost:5000/etudiants')
        .then(res => this.props.getEtudiants(res.data));
        axios.get('http://localhost:5000/filieres')
        .then(res => {
        res.data.map(filiere => tab.push(filiere.filiere))    
        this.setState({
          tabFiliere : res.data,
          tabNomFiliere : tab
        })
        }
        )
        this.state.tabNomFiliere.map(filiere => {
            tabEtudiant.push(this.props.etudiants.filter(etudiant => etudiant.filiere === filiere))
        })
        console.log(tabEtudiant)
    }
    
    render() {
        return (
                <div className="container">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                <div className="row">
                    <div className="col-md-5">
                    <ChartGender />
                    </div>
                    <div className="col-md-1"></div>
                 <div className="col-md-5">
                 <ChartFiliere 
                        GI={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'GI').length}
                        TM={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'TM').length}
                        ER={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'ER').length}
                        GODT={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'GODT').length} 
                        ISIL={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'ISIL').length}
                        MGE={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'MGE').length} 
                        filieres = {this.state.tabFiliere}
                        tabNomFiliere = {this.state.tabNomFiliere}
                />
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
export default connect(mapStateToProps,{getEtudiants})(Statistique);