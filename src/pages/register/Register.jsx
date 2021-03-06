import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        //password = password confirmation
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("wrong");
        } else {
            try {
                //register Api
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Real SNS</h3>
                    <span className='loginDesc'>本格的なSNSを自分の手で</span>
                </div>
                <div className='loginRight'>
                    <form
                        className='loginBox'
                        onSubmit={(e) => handleSubmit(e)}>
                        <p className='loginMsg'>新規登録ははこちら</p>
                        <input
                            type='text'
                            className='loginInput'
                            placeholder='ユーザー名'
                            required
                            ref={username}
                        />
                        <input
                            type='email'
                            className='loginInput'
                            placeholder='Email'
                            required
                            ref={email}
                        />

                        <input
                            type='password'
                            className='loginInput'
                            placeholder='password'
                            required
                            minLength='5'
                            ref={password}
                        />
                        <input
                            type='password'
                            className='loginInput'
                            placeholder='password confirm'
                            required
                            minLength='5'
                            ref={passwordConfirmation}
                        />

                        <button className='loginButton' type='submit'>
                            Sign Up!
                        </button>
                        <button className='loginRegisterButton'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
