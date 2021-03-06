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
        filiere : '',
        adresse : '',
        email : '',
        tel : '',
        tabFiliere : []
      }
      onChangeInput = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
      submit = (e) =>{
        e.preventDefault();
        const user = {
          nom : this.state.nom,
          prenom : this.state.prenom,
          cne : this.state.cne,
          cin : this.state.cin,
          sexe_gender : this.state.sexe_gender,
          filiere : this.state.filiere,
          adresse : this.state.adresse,
          email : this.state.email,
          tel : this.state.tel

        }
        axios.post('http://localhost:5000/etudiants/add',user)
        .then(res => this.props.addEtudiant(res.data));
        this.props.history.push('/listeetudiants/'+this.state.filiere);
      }
      componentDidMount(){
        axios.get('http://localhost:5000/filieres')
        .then(res => this.setState({
          tabFiliere : res.data
        }))
      }
    render() {
        const { cne , cin , nom , prenom , sexe_gender , filiere , adresse , email , tel} = this.state;
        return (
            <div className="container">
              
                <br></br>
                <br></br>
                <h3 style={{textAlign:"center",marginBottom:"30px"}}>Ajouter un nouveau étudiant</h3>
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
                <div className="form-group">
                <input type="text" className="form-control" name="adresse" value={adresse} onChange={this.onChangeInput} placeholder="adresse"/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" name="email" value={email} onChange={this.onChangeInput} placeholder="email"/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" name="tel" value={tel} onChange={this.onChangeInput} placeholder="tel"/>
                </div>
                <div class="form-group">
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