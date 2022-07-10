import React from 'react'
import "./Register.css";

export default function Register() {
  return (
      <div className='login'>
          <div className='loginWrapper'>
              <div className='loginLeft'>
                  <h3 className='loginLogo'>Real SNS</h3>
                  <span className='loginDesc'>本格的なSNSを自分の手で</span>
              </div>
              <div className='loginRight'>
                  <div className='loginBox'>
                      <p className='loginMsg'>新規登録ははこちら</p>
                      <input
                          type='text'
                          className='loginInput'
                          placeholder='ユーザー名'
                      />
                      <input
                          type='text'
                          className='loginInput'
                          placeholder='Email'
                      />

                      <input
                          type='text'
                          className='loginInput'
                          placeholder='password'
                      />
                      <input
                          type='text'
                          className='loginInput'
                          placeholder='password confirm'
                      />

                      <button className='loginButton'>Sign Up!</button>
                      <button className='loginRegisterButton'>
                          Login
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}
