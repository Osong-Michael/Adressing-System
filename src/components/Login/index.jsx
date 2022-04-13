import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logInUser, checkStatus } from '../../Redux/actions';
import { loadingStatus, getToken } from '../../Redux/reducers'
import './login.style.css';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
        const { checkStatus } = this.props;
        checkStatus();
    }


    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const { logInUser } = this.props;

        logInUser({ username, password })

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
        const { token } = this.props
        return (
            <>
                {token && <Navigate to='/' replace />}
                <div className="login-form">
                    <h3 className="title">Login</h3>
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
                            <input type="submit" className="btn login-btn"/>
                        </div>
                    </form>
                    </div>
                </div>
            </>
        )
    }
};

const mapStateToProps = state => ({ loading: loadingStatus(state), token: getToken(state)  });

const mapDispatchToProps = dispatch => bindActionCreators({ logInUser, checkStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);