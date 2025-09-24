// React router
import { Link } from "react-router-dom";

// React hooks
import { useState } from "react";

// State
// static State (Text)
import { loginAndRegisterText } from "../assets/staticState/staticText";
// from assets dir (static images)
import register from "../assets/images/register.webp";

// Login function component
const Register = () => {
  // satate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   Functions
  // Handle submit form function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data:", { name, email, password });
  };

  //   return
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">
              {loginAndRegisterText.headerText}
            </h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            {loginAndRegisterText.text}
          </h2>
          <p className="text-center mb-6">{loginAndRegisterText.text4}</p>
          <div className="mb-4 ">
            <label className="block text-sm font-semibold mb-2">
              {loginAndRegisterText.text3}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder={loginAndRegisterText.text3}
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-semibold mb-2">
              {loginAndRegisterText.labelText}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder={loginAndRegisterText.labelText}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              {loginAndRegisterText.labelText2}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder={loginAndRegisterText.labelText2}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loginAndRegisterText.buttonText2}
          </button>
          <p className="mt-6 text-center text-sm">
            {loginAndRegisterText.text5} {""}
            <Link to="/login" className="text-blue-500">
              {loginAndRegisterText.buttonText}
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="loginImg"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
