import React from 'react'
import { useState } from 'react';
import fire from './fire';
// import { withRouter, Redirect } from "react-router";
// import { createBrowserHistory } from 'history';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Link,
//   Switch,
//   Navigate,
//   Route
// } from "react-router-dom"

export default function Login() {
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState('')
    // const history = createBrowserHistory();
  
    const configureCaptcha = () => {
      window.recaptchaVerifier = new fire.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log('recapctha verified')
        },
        defaultCountry: 'IN'
      });
    }
  
    const onSignInSubmit = (e) => {
      e.preventDefault()
      configureCaptcha()
  
      const phoneNumber = "+91 "+number
      console.log(phoneNumber)
  
      const appVerifier = window.recaptchaVerifier;
      fire.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log('otp sent')
            // ...
          }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log('error',error.message)
            console.log('sms not sent')
          });
    }
  
    const onSubmitOTP = (e) => {
      e.preventDefault()
  
      const code = otp
      console.log(otp)
      window.confirmationResult.confirm(code).then((result) => {
        const user = result.user
        console.log(JSON.stringify(user))
        console.log('user verified')
        // return <Redirect to={"/login"} />
      })
      .catch(err => {
        console.log(err.message)
      })
    }

  return (
    <div className="App">
    <h2>Login Form</h2>
    <form onSubmit={onSignInSubmit}>
      <div id="sign-in-button"></div>
      <input type="number" name='mobile' placeholder='Mobile number' onChange={(e) => setNumber(e.target.value)} value={number} required />
      <button type="submit">Submit</button>
    </form>
    <h2>Enter otp</h2>
    <form onSubmit={onSubmitOTP}>
      <input type="number" name='otp' onChange={(e) => setOtp(e.target.value)} value={otp} placeholder='OTP number' required />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
