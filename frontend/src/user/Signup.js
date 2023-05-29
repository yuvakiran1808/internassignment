import React, { useState } from "react";
import { signup } from "./userapicalls";



const Signup = () => {

        const [name,setName] = useState();
        const [email,setEmail] = useState();
        const [password,setPassword] = useState();


        const onChangeEmailHandler = (e)=>{
              setEmail(e.target.value);
        }
        const onChangeNameHandler = (e)=>{
              setName(e.target.value);
        }
        const onChangePasswordHandler = (e)=>{
              setPassword(e.target.value);
        }
 
      const onSubmitSignupHandler = (e)=>{
             e.preventDefault();
             signup({name,email,password})
             .then((data)=>{
                 console.log(data);
             })
             .catch((err)=>{
                  console.log(err);
             })
             setName("");
             setEmail("");
             setPassword("");
      }

  return (
    <div className="mt-5 p-5">
        <h1 className="text-center text-warning">Create your account</h1>
      <form action="" className="col-md-6 mx-auto">
        <div className="p-2">
          <label htmlFor="name" className="py-2 h6">
            Enter your name:
          </label>
          <input
          onChange={onChangeNameHandler}
            type="text"
            placeholder="Username"
            className="form-control border border-dark py-2"
            id="name"
            value={name}
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="email" className="py-2 h6">
            Enter your email:
          </label>
          <input
          onChange={onChangeEmailHandler}
            type="email"
            value={email}
            placeholder="email"
            className="form-control border border-dark py-2"
            id="email"
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="pass" className="py-2 h6">
            Enter your password:
          </label>
          <input
          onChange={onChangePasswordHandler}
            type="password"
            value={password}
            placeholder="password"
            className="form-control border border-dark py-2"
            id="pass"
            required
          />
        </div>
        <div className="mt-3 text-center text-dark p-2">
          <button
          onClick={onSubmitSignupHandler}
            type="button"
            className="btn btn-outline-warning text-dark w-100 text-lg"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;