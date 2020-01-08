import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div className="container">
<nav class="navbar navbar-expand-lg navbar-dark unique-color">

  <span class="navbar-brand">Project</span>

 
  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
      </li>
      <li class="nav-item">
      <span class="nav-link"><Link style={{color:'white'}} to="/">Accueil</Link></span>
      </li>
      <li class="nav-item">
      <span class="nav-link"><Link style={{color:'white'}} to="/listeetudiants">Etudiants</Link></span>
      </li>
      <li class="nav-item">
      <span class="nav-link"><Link style={{color:'white'}} to="/statistique">Statistiques</Link></span>
      </li>
      

     

    </ul>
  </div>

</nav>
            </div>
        )
    }
}
