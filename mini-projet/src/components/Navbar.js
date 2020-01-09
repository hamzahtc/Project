import React, { Component } from 'react'
import { Link , withRouter} from 'react-router-dom'

class Navbar extends Component {
    onLogOut = () => {
      this.props.logOut();
      this.props.history.push("/login");
    }
    render() {
        return (
            <div className="container">
               <nav class="navbar navbar-expand-lg navbar-dark unique-color">
               <span class="navbar-brand">Project</span> 
               {this.props.loggedIn ?
               <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav mr-auto">
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
                <span class="navbar-text white-text">
                <a style={{color:'white'}} onClick={this.onLogOut}>Se deconnecter</a>
                </span>
                
              </div>
                :
                <span class="navbar-text white-text">
                    <Link style={{color:'white'}} to="/login">Login</Link>
                </span>
                }

              </nav>
            </div>
        )
    }
}
export default withRouter(Navbar);