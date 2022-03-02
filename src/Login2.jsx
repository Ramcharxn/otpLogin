import React from 'react'

export default function Login(props) {
    const { 
        email, 
        setEmail, 
        password, 
        setPassWord, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props

  return (
    <div>
        <label>UserName</label>
        <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
        <p>{emailError}</p>
        <label>password</label>
        <input type="password" required value={password} onChange={e => setPassWord(e.target.value)} />
        <p>{passwordError}</p>
        <div>
            {hasAccount ? (
                <>
                    <button onClick={handleLogin}>SignIN</button>
                    <p> Dont have a account <span onClick={() => setHasAccount(!hasAccount)}>signup</span></p>
                </>
            ) : (
                <>
                    <button onClick={handleSignup}>Sign up</button>
                    <p>Have a account <span onClick={() => setHasAccount(!hasAccount)}>signin</span></p>
                </>
            )}
        </div>
    </div>
  )
}
