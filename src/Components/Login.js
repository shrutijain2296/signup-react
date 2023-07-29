
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Background Pattern.png";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800&family=Prompt:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>


const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if(!email || !password){
        setError("Please enter all the fields ");
        // setSuccess("");
        return;
    }

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            // username: email, // Changed from email to username
            // password,
            username:email,
            password:password,
          }),
      });

      console.log(JSON.stringify({
        // username: email, // Changed from email to username
        // password,
        username:email,
        password:password,
      }));
      navigate("/profile");
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        setError('');
      } else {
        setError('Invalid username or password. Please try again!');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="login">
     <div className='form-container'>
        <form onSubmit={handleLogin}>
        <p className = "welcome">Welcome back! 👋</p>
            <h2>Sign in to your account</h2>
            <label htmlFor="email">Your email</label>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">CONTINUE</button>
            {error && <div className="error">{error}</div>}
            <p className = "forgetPass">Forget your password?</p>
        </form>
     </div> 
       <p>Don't have an account?<a href="#" id="signup">Sign up</a></p>
    </div>
  );
};

export default Login;


