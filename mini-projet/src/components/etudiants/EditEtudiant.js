import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updateEtudiant} from '../../actions/etudiantActions';
import axios from 'axios';

class EditEtudiant extends Component {
    state = {
        nom : '',
        prenom : '',
        cne : '',
        cin : '',
        sexe_gender : ''
        
      }
      componentDidMount(){
        const id = this.props.match.params.id;
        const etudiant = this.props.etudiants.find(function(element) { 
            return element._id === id; 
          }); 
        
        this.setState({
            _id : etudiant._id,
            nom : etudiant.nom,
            prenom : etudiant.prenom,
            cne : etudiant.cne,
            cin : etudiant.cin,
            sexe_gender : etudiant.sexe_gender,
            filiere : etudiant.filiere


        })
       
      }
      onChangeInput = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
      submit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5000/etudiants/update/'+this.state._id,this.state)
        .then(res => this.props.updateEtudiant(res.data));
        
        this.props.history.push('/listeetudiants');
        console.log(this.state);
      }
    render() {
        const { cne , cin , nom , prenom , sexe_gender , filiere} = this.state;
        return (    
            <div className="container">
               <br></br>
                <br></br>
        <h3 style={{textAlign:"center"}}>Modifier les informations de {nom} {prenom} </h3>
                <br></br>
                <br></br>
                <div className='row'>
                  <div className="col-md-3">
                  <i  class="fas fa-backspace  red-text fa-2x" style={{cursor: 'pointer'}} onClick={()=>{this.props.history.push('/listeetudiants')}}></i>

                  </div>
                  <div className="col-md-6">
                    
                    <form onSubmit={this.submit}>
          <div className="form-group">
         <input type="text" className="form-control" name="cne" value={cne} onChange={this.onChangeInput} placeholder="CNE"/>
        </div>
        <div className="form-group">
         <input type="text" className="form-control" name="cin" value={cin} onChange={this.onChangeInput} placeholder="CIN"/>
        </div>
        <div className="form-group">
         <input type="text" className="form-control" name="nom" value={nom} onChange={this.onChangeInput} placeholder="Nom"/>
        </div>
        <div className="form-group">
         <input type="text" className="form-control" name="prenom" value={prenom} onChange={this.onChangeInput} placeholder="Prenom"/>
        </div>
        <div class="form-group">
          <select class="form-control" name="filiere" onChange={this.onChangeInput} value={filiere} placeholder="Filiere">
          <option disabled selected>Filiere</option>
            <option>GI</option>
            <option>ER</option>
            <option>TM</option>
            <option>GODT</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info btn-block my-4">Update</button>
          </form>
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
export default connect(mapStateToProps,{updateEtudiant})(EditEtudiant);