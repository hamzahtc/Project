import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteEtudiant} from '../../actions/etudiantActions';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { MdEdit,MdDeleteForever,MdMoreHoriz } from "react-icons/md";

class Etudiant extends Component {
    deleteEtudiant = (id) => {
        axios.delete('http://localhost:5000/etudiants/'+this.props.etudiant._id)
       .then( this.props.deleteEtudiant(id));
    }
    render() {
        const {_id,nom,prenom,cne,cin,sexe_gender,filiere} = this.props.etudiant
        return (
           
            <tr>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{cne}</td>
           
            <td>
            <i onClick={this.deleteEtudiant.bind(this,_id)} class="fas fa-user-times fa-lg red-text" style={{cursor: 'pointer'}}></i>
               <Link to={"/edit/"+_id}>                <i class="fas fa-user-edit fa-lg green-text"></i></Link>

               </td>
               <td>               <Link to={"/etudiant/"+_id}><i class="fas fa-angle-double-right fa-lg cyan-text" style={{cursor: 'pointer'}}></i></Link>
</td>
            </tr>
        
        )
    }
}
export default connect(null,{deleteEtudiant})(Etudiant);
