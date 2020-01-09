import React, { Component } from 'react'
import axios from 'axios';
import { withRouter} from 'react-router-dom'

class Login extends Component {
    state = {
            email : '' ,
            password : ''
        }
        login = (e) => {
            e.preventDefault();
         axios.post('http://localhost:5000/admins/login',this.state)
            .then(res => {
                if(res.data[0].email == this.state.email  && res.data[0].password == this.state.password)
                {
                    this.props.login();
                    this.props.history.push("/");
                }
                else{
                    
                }
                
            });  
        }
      //  
        handlChange = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        
    render() {
        
        return (
            <div className="container">
                <br></br>
                <br></br>
                <h3 style={{textAlign:"center"}}>Login</h3>
                <br></br>
                <br></br>
                <div className='row'>
                  <div className='col-md-3'>

                  </div>
                  <div className='col-md-6'>
                 <form onSubmit={this.login}>
                <div class="form-group">
                    <input type="email" name="email" onChange={this.handlChange} class="form-control" id="exampleInputEmail1"placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <input type="password" name="password" onChange={this.handlChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-info btn-block my-4">Login</button>
                </form>
                  </div>
                  </div>
               
            </div>
        )
    }
}
export default withRouter(Login);