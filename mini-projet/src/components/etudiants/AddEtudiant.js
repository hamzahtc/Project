import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addEtudiant} from '../../actions/etudiantActions';
import axios from 'axios';
class AddEtudiant extends Component {
    state = {
        nom : '',
        prenom : '',
        cne : '',
        cin : '',
        sexe_gender : '',
        filiere : ''
      }
      onChangeInput = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
      submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/etudiants/add',this.state)
        .then(res => this.props.addEtudiant(res.data));
        this.props.history.push('/listeetudiants');
      }
    render() {
        const { cne , cin , nom , prenom , sexe_gender , filiere} = this.state;
        return (
            <div className="container">
                <br></br>
                <br></br>
                <h3 style={{textAlign:"center"}}>Ajouter un nouveau étudiant</h3>
                <br></br>
                <br></br>

                <div className='row'>
                  <div className='col-md-3'>
                  <i  class="fas fa-backspace  red-text fa-2x" style={{cursor: 'pointer'}} onClick={()=>{this.props.history.push('/listeetudiants')}}></i>
                  </div>
                  <div className='col-md-6'>
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
          <select class="form-control" name="filiere" onChange={this.onChangeInput} placeholder="Filiere">
          <option disabled selected>Filiere</option>
            <option>GI</option>
            <option>ER</option>
            <option>TM</option>
            <option>GODT</option>
          </select>
        </div>

        <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="male" name="sexe_gender" value="male" onChange={this.onChangeInput}/>
  <label class="custom-control-label" for="male">Male</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="female" name="sexe_gender" value="female" onChange={this.onChangeInput}/>
  <label class="custom-control-label" for="female">Female</label>
</div>
<br></br>
<br></br>

              
       
        <button type="submit" className="btn btn-info btn-block my-4">Ajouter</button>
        
          </form>
                  </div>
                </div>
              


            </div>
        )
    }
}
export default connect(null,{addEtudiant})(AddEtudiant);