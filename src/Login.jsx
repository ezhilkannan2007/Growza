import React, { useState } from 'react';
import useFetch from './useFetch';

function Login() {
  const formStyle = {
    width: "100%",
    maxWidth: "500px", 
    
  }

  const [users,error] = useFetch("http://localhost:4000/users");
  const [pwd1,setPwd1] = useState("");
  const [Id,setId] = useState("");


  function handlepwd1(event){
    setPwd1(event.target.value);
  }

  function handleId(event){
    setId(event.target.value);
  }

  function checkPassword(event){
    if(!users){
        console.log("please wait until home page loads");
        return <><p>loading</p></>
    }

    const matcheduser = users.find((user)=>{return(user.id==String(Id) && user.password == String(pwd1))})
    if(matcheduser){
      console.log("Passwords matched")
    }
    else{
      console.log(users)
      console.log("password wrong")
    }
  }

  return (
    // This wrapper container creates a flexbox context that centers everything vertically and horizontally
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      
      <form style={formStyle} className="p-4 border rounded shadow bg-white">
        <h1 className="text-dark"><i className="bi bi-mortarboard-fill"></i> Grow<span className='text'>za</span></h1>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" value={Id} onChange={handleId} className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Id</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" value={pwd1} onChange={handlepwd1}/>
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>


        <div className="row mb-4">
          <div className="col d-flex justify-content-start">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>

          <div className="col text-end">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* Added w-100 to make the button take up the full form width */}
        <button type="button" onClick={checkPassword} className="btn btn-primary w-100 mb-4">Log in</button>

        
      </form>

    </div>
  );
}

export default Login;
