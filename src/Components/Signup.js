import React from 'react'
import { Link } from 'react-router-dom'

function Signup({ logintoggle }) {
  return (
    <form>
      <h3>SIGNUP PAGE</h3>
      <div className="UserName">
        <input placeholder="UserName" type="text" color="secondary" name="fUserName" /></div>
      <div>
        <input placeholder="password" type="password" color="secondary" name="fpassword" />
      </div>
      <div>
        <input placeholder="male" type="radio" id="male" name="male" />
        <label>Male</label>

        <input placeholder="female" type="radio" id="female" name="male" />
        <label>Female</label>

      </div>
      <div>
        <input placeholder="email" type="email" color="secondary" name="femail" />
      </div>
      <div>
        <input placeholder="mobile number" type="number" color="secondary" name="fmobile number" />
      </div>
      <div>
        <input placeholder="DOB" type="date" color="secondary" name="fDOB" />
      </div>
      {/* <button type="submit" id="submit" onSubmit={logintoggle()}> submit </button> */}
      <input type="submit" id="submit" />
      <p className="samplepara" onClick={() => { logintoggle(true) }}> CLICK HERE TO  <Link to={"/login"}>login</Link> </p>


    </form>
  )
}


export default Signup