import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/UserSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()
const dispatch = useDispatch()
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(addUser({authtoken:user.stsTokenManager.accessToken,email:user.email}))
        // sessionStorage.setItem('token',user.accessToken)
        window.location.replace('/dashboard')
        console.log("loggedin", user);
        setEmail("");
        setPassword("");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="m-20 grid grid-rows-4 gap-5 w-[40vw] mx-auto ">
      <input
        className="border rounded p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="border rounded p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
      <a href="/createuser"> Create a new account?</a>
    </div>
  );
};

export default Login;
