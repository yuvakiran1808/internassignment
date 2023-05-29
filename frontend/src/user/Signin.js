import React, { useState } from "react";
import { signin, authenticate } from "./userapicalls";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitSigninHandler = (e) => {
    e.preventDefault();
    signin({ email, password })
      .then((data) => {
        if (!data.detail) {
          authenticate(data, () => {
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="mt-5 p-5">
      <h1 className="text-center text-warning">Signin to your account</h1>
      <form action="" className="col-md-6 mx-auto">
        <div className="p-2">
          <label htmlFor="email" className="py-2 h6">
            Enter your email:
          </label>
          <input
            onChange={onChangeEmailHandler}
            type="email"
            placeholder="email"
            value={email}
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
            value={password}
            type="password"
            placeholder="password"
            className="form-control border border-dark py-2"
            id="pass"
            required
          />
        </div>
        <div className="mt-3 text-center text-dark p-2">
          <button
            onClick={onSubmitSigninHandler}
            type="button"
            className="btn btn-outline-warning text-dark w-100 text-lg"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
