import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div className="card bg-light">
              <br/><br/>
              <article className="card-body mx-auto shadow p-3 mb-5 bg-white rounded">
                <br/>
                <form style={{ paddingRight: "50px", paddingLeft: "50px" }}>
                <h5 style={{ textAlign: 'center', fontSize: "16px" }}>Login</h5><br/>
                <div className="alert alert-warning" style={{ fontSize: "12px" }}>
                  <center><h4>Demo Account</h4>
                  <br/><b>Admin</b> <br/>Username: admin<br/>Password: admin
                  <br/><br/><b>Member</b> <br/>Username: member<br/>Password: member
                  <br/><br/><b>Producer</b> <br/>Username: angel<br/>Password: angel
                  </center>
                </div>
                <br/>
                <div className="form-group">
                  <input ref="username" className="form-control form-control-lg" style={{ fontSize: "14px" }} 
                  placeholder="Username" type="text" />
                </div>
                <div className="form-group">
                  <input ref="password" className="form-control form-control-lg" style={{ fontSize: "14px" }} 
                  placeholder="Password" type="password" />
                </div>
                <br/>
                <center><Button color="primary" style={{ fontSize: "14px" }} 
                onClick={this.onBtnSubmit}><b>Sign in</b></Button></center>
                </form>
                <br/><br/>
                <p className="text-center" style={{ fontSize: "14px" }}>Don't have an account? &nbsp;
                        <Link to="/register">Create one</Link> </p>
              <br/>
              </article>
            </div>
        )
    }
}

export default Login;