import React, { Component } from 'react'
import {connect} from 'react-redux';

class EtudiantInfo extends Component {
    state = {
        etudiant : {}
    }
    componentWillMount(){
        this.setState({ etudiant : this.props.etudiants.find(etudiant => etudiant._id === this.props.match.params.id) }) 
    }
    render() {
        return (
            <div className="container" style={{textAlign:"center"}}>

<br></br>
<br></br>
<div className="row">
    <div className="col-md-3">
    
    </div>
    <div className="col-md-4">
    <div class="card" style={{height:'400px'}}>


  <div class="card-body">

    <h4 class="card-title" style={{fontSize:'2rem'}}>{this.state.etudiant.nom} {this.state.etudiant.prenom}</h4>
    <hr/>
    <br></br>
    <div className="row">
        <div className="col-md-4" style={{fontSize:'25px'}}>CNE :  </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.cne} </div>
        <hr/>
        <div className="col-md-4" style={{fontSize:'25px'}}>CIN : </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.cin} </div>
        <hr/>
        <div className="col-md-4" style={{fontSize:'25px'}}>Email :  </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.email}  </div>
        <hr/>
        <div className="col-md-4" style={{fontSize:'25px'}}>Adresse :  </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.adresse}   </div>
        <hr/>
        <div className="col-md-4" style={{fontSize:'25px'}}>Num :  </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.tel    }  </div>
        <hr/>
        <div className="col-md-4" style={{fontSize:'25px'}}>Sexe :  </div>
        <div className="col-md-8" style={{fontSize:'20px'}}>{this.state.etudiant.sexe_gender} </div>
    </div>
  </div>

</div>
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

export default connect(mapStateToProps,null)(EtudiantInfo);
