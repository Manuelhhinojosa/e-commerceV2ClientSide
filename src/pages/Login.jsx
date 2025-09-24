// React router
import { Link } from "react-router-dom";

// React hooks
import { useState } from "react";
import { loginText } from "../assets/staticState/staticText";

// State
// static State (Text)
import(loginText);
// from assets dir (static images)
import login from "../assets/images/login.webp";

// Login function component
const Login = () => {
  // satate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   return
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">{loginText.headerText}</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            {loginText.text}
          </h2>
          <p className="text-center mb-6">{loginText.text2}</p>
          <div className="mb-4 ">
            <label className="block text-sm font-semibold mb-2">
              {loginText.labelText}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder={loginText.labelText}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              {loginText.labelText2}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder={loginText.labelText2}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loginText.buttonText}
          </button>
          <p className="mt-6 text-center text-sm">
            {loginText.questionText} {""}
            <Link to="/register" className="text-blue-500">
              {loginText.linkText}
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="loginImg"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
