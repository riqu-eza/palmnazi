import React, { useState } from "react";
import "./signup.css"; // Import CSS file for styling
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const querySnapshot = await firestore
        .collection("users")
        .where("username", "==", username)
        .get();
      if (querySnapshot.empty) {
        throw new Error("User not found");
      }
      const user = querySnapshot.docs[0].data();

      await signInWithEmailAndPassword(Auth, user.email, password);
      console.log("User logged in successfully");

      navigate("/");
    } catch (error) {
      console.error('Authentication error:', error);
    // Display error message to the user or handle it in another appropriate way
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      // Display appropriate message for invalid credentials
      setError('Invalid email or password. Please try again.');
    } else {
      // Display a generic error message for other authentication errors
      setError('An error occurred during login. Please try again later.');
    }
    setUsername("");
    setPassword("");
  }

    
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        className="auth-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" type="submit">
        Login
      </button>
    </form>
  );
};

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign up logic here
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const userCrediatils = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      console.log(userCrediatils);

      const user = userCrediatils.user;

      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      await addDoc(collection(firestore, "users"), {
        id: user.uid,
        email: email,
        username: username,
        userType: userType,
        createdat: new Date(),
        password: password,
      });

      console.log("User account created successfully!");
      navigate("/LoginForm");

    } catch (error) {
      if (error.code === "auth/invalid-email") {
        // Handle invalid email error
        console.error("Invalid email format");
      } else {
        // Handle other authentication errors
        console.error("Authentication failed:", error.message);
      }
    }
    setUsername("");
    setPassword("");
    setEmail ("")
    setUserType("")
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        className="auth-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        className="auth-input"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="tourist">Tourist</option>
        <option value="business">Business</option>
      </select>
      <button className="auth-button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <h1 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button className="switch-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </div>
  );
};

export default AuthPage;
