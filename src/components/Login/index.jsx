import React from 'react';
import './login.style.css';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log('SENT', this.state);

        this.setState({
            username: '',
            password: ''
        })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="login-form">
                <div className="title">Login</div>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            required
                            onChange={this.handleChange}
                            className="login-input"
                        />
                    </div>
                    <div className="input-container">
                    <label>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            required
                            onChange={this.handleChange}
                            className="login-input"
                        />
                    </div>
                    <div className="button-container">
                        <input type="submit" className="login-btn"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
};

export default Login;