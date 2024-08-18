import React from 'react'
import "./CSS/Loginsignup.css";
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignnup-container">
        <h1>Sign Up</h1>
        <div className="logindignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button id="continue">Continue</button>
        <p className='login'>Already have an account ?<span>Login here</span></p>
        <div className="loginsignup-agree">
        <p> <input type="checkbox" />
          I agree to the terms and conditon</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup