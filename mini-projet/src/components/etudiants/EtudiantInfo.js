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
<br></br>
<br></br>
<br></br>
<br></br>
                <i class="fas fa-cog fa-spin fa-10x" style={{color:'#3f729b'}}></i>
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
