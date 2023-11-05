import React from "react";
import "./loginform.css"

const LoginForm = () => {
    return (
        <div className="cover">
            <h1>Welcome Back!</h1>
            <h3>Sign in to continue</h3>
            <input type="text" placeholder="username or email" />
            <input type="password" placeholder="password" />

            <div className="login-btn">LOGIN</div>

            <p className="text">OR LOGIN USING</p>

            <div className="alt-log">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

        </div>
    )
}

export default LoginForm