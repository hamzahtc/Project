import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {getEtudiants} from '../actions/etudiantActions';
import ChartGender from './ChartGender';
import ChartFiliere from './ChartFiliere';
class Statistique extends Component {
    
    componentDidMount(){
        
        axios.get('http://localhost:5000/etudiants')
        .then(res => this.props.getEtudiants(res.data));  
        
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
                    <ChartGender boys={this.props.etudiants.filter((etudiant)=>etudiant.sexe_gender === 'male').length}
                       girls={this.props.etudiants.filter((etudiant)=>etudiant.sexe_gender === 'female').length}
                />
                    </div>
                    <div className="col-md-1">
</div>
                 <div className="col-md-5">
                 <ChartFiliere 
            GI={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'GI').length}
            TM={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'TM').length}
            ER={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'ER').length}
            GODT={this.props.etudiants.filter((etudiant)=>etudiant.filiere === 'GODT').length}
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