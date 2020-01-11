import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import ListeEtudiants from './components/etudiants/ListeEtudiants';
import AddEtudiant from './components/etudiants/AddEtudiant';
import EditEtudiant from './components/etudiants/EditEtudiant';
import Etudiant from './components/etudiants/Etudiant';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './store';
import Statistique from './components/Statistique';
import EtudiantInfo from './components/etudiants/EtudiantInfo';
import Login from './components/Login';
import ListeEtudiantsFiliere from './components/etudiants/ListeEtudiantsFiliere';

export default class App extends Component {
      state={
        loggedIn : false
      }
      login = () => {
        this.setState({
          loggedIn:true
        })
      }
      logOut = () => {
        this.setState({
          loggedIn:false
        })
      }
      /*{
        this.state.loggedIn === true ? 
        <div>
        <Route path="/statistique" component={Statistique} />             
        <Route path="/listeetudiants" component={ListeEtudiants}/>
        <Route path="/etudiant/:id" component={EtudiantInfo}/>
        <Route path="/addEtudiant" component={AddEtudiant}/>
        <Route path="/edit/:id" component={EditEtudiant}/>
        </div>  : null
        }*/
  render() {
    return (
      <Provider store={store}>
      <div>
       <Router>
       <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}></Navbar>
       <Route path="/" component={Accueil} exact/>   
       
        <Route path="/statistique" component={Statistique} />             
        <Route path="/listeetudiants" component={ListeEtudiants} exact/>
        <Route path="/etudiant/:id" component={EtudiantInfo}/>
        <Route path="/addEtudiant" component={AddEtudiant}/>
        <Route path="/edit/:id" component={EditEtudiant}/>
        
        <Route path="/listeetudiants/:filiere" component={ListeEtudiantsFiliere}/>
       <Route path="/login" component={() => <Login login={this.login} />}/>
       </Router>
      </div>

      </Provider>
     
    )
  }
}
