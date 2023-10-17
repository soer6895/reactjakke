import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className=" flex  bg-gray-100 py-4 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={loginUser} className="mt-8 space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Log in"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Having problems signing in? Contact us at <a href="tel: 22276332" className="text-indigo-500 underline">+22276332</a> or <a href="mailto:sfdahlmann@gmail.com" className="text-indigo-500 underline">sfdahlmann@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
