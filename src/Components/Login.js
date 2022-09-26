import React from 'react'
import { Link } from 'react-router-dom'


function Login({ logintoggle }) {
  function handleSumbit (props){
    props.preventDefault()
    window.location.href = "/dashboard"
  }
  return (
    <form className='sampleform' >
      <h3>login form</h3>
      <input placeholder="username" type="text" color="secondary" name="floginname" />
      <input placeholder="password" type="password" color="secondary" name="floginpassword" />
      <button onClick ={(e)=>handleSumbit(e)}>login</button>

      <Link to={"/signup"}>signup</Link>
    </form>
  )
}

export default Login