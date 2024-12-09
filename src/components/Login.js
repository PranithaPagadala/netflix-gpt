import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  console.log("...");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-48 text-white mx-auto left-0 right-0 bg-opacity-80 rounded-lg">
        {!isSignInForm && (
          <input
            type="test"
            placeholder="Full-Name"
            className="p-4 my-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email-Address"
          className="p-4 my-4 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {" "}
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
