import React from 'react'

const Hero = ({handleLogout, user}) => {
  console.log(user)
  return (
    <div>
        <h2>welcome</h2>
        <h4>{user.phoneNumber}</h4>
        <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Hero
