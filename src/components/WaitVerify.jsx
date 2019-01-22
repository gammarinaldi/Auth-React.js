import React, { Component } from 'react';

class WaitVerify extends Component {
    render() {
        return (
            <div>
                <h2>Check your email for verification link</h2>
                Click Resend button below, if you not receive verification email
                <input type="button" value="Resend"/>
            </div>
        )
    }
}

export default WaitVerify;