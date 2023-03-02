import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { userRegister } from '../JS/userSlice/userSlice';
import {Link} from "react-router-dom"
function Register() {
  const [register, setregister] = useState({
    name:"",
    LastName:"",
    email:"",
    password:"",
    img:"",
  });
 const dispatch = useDispatch();
  return (
    <div>
          <div className="wrapper">
    <form onSubmit ={(e)=> e.preventDefault()} className="signin-f">       
      <h2 className="form-signin-heading">S'INSCRIRE </h2>
      <input id="bax" type="text"
       class="form-control" name="name"
        placeholder="name" required=""
         autofocus="" 
         onChange={(e) => setregister({...register,name:e.target.value})}/>
      <input id="bax" type="text" 
      class="form-control" 
      name="LastName"
       placeholder="LastName" 
       required="" autofocus=""
       onChange={ (e) => setregister({...register,LastName:e.target.value})} />
         <input id="bax" type="text" 
      class="form-control" 
      name="username" placeholder="Email Address" required="" autofocus="" 
      onChange={ (e) => setregister({...register,email:e.target.value})}/>
      <input  id="bax" type="text" 
      class="form-control" 
      name="Password" placeholder="Password" required="" autofocus="" 
      onChange={ (e) => setregister({...register,password:e.target.value})} />
       <input id="bax" type="text" 
      class="form-control" 
      name="username" placeholder="img" required="" autofocus="" 
      onChange={ (e) => setregister({...register,img:e.target.value})}/>
   
      <button id="ck" 
      className="btn btn-lg btn-primary btn-block" onClick={() => {dispatch(userRegister(register));
      }}
       ><Link id="butt" to="/profil">S'inscrire</Link></button>  
     
    <button id="res"> <Link id="butt" to="/logi">Connexion </Link></button>
    </form>
  </div>
    </div>
  )
}

export default Register