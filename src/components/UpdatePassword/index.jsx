import React from 'react';
import './style.css';

class ChangePassword extends React.Component {
    state = {
        password: ''
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log('SENT', this.state);

        this.setState({
            password: ''
        })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { password } = this.state;
        return (
            <div className="login-form">
                <h3 className="title">Change Password</h3>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label>New Password </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="button-container">
                        <input type="submit" className='btn login-btn' value="Change Password"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
};

export default ChangePassword;