import {API} from "../backend";

// Function to sign up a user

export const signup = (user) => {
    return fetch(`${API}/signup/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  // Function to sign in a user

  export const signin = (user) => {
    return fetch(`${API}/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
 
  // Function to authenticate a user and store the JWT token in local storage

  export const authenticate = (data,next) => {
    if (typeof window !== "undefined") {
       localStorage.setItem("jwt", JSON.stringify(data));
    }
    next();
  };
  
  // Function to sign out a user

  export const signout = (next) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`${API}/signout`, {
        method: "GET",
      })
        .then((response) => {
          console.log(response.json());
        })
        .catch((err) => console.log(err));
    }
  };
  
  // Function to check if a user is authenticated

  export const isAuthenticated = () => {
    if (typeof window === "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt")); // Return the parsed JWT token from local storage
    } else {
      return false;
    }
  };