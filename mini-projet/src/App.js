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

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
       <Router>
       <Navbar></Navbar>
       <Route path="/" component={Accueil} exact/>   
       <Route path="/statistique" component={Statistique} />             
       <Route path="/listeetudiants" component={ListeEtudiants}/>
       <Route path="/etudiant/:id" component={EtudiantInfo}/>
       <Route path="/addEtudiant" component={AddEtudiant}/>
       <Route path="/edit/:id" component={EditEtudiant}/>
       </Router>
      </div>

      </Provider>
     
    )
  }
}
