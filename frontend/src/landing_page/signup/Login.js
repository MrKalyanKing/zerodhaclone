import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-6 mt-5">
          <img src="media/images/signup.png" />
        </div>
        <div className="col-6 text-center mt-5 ">
          <h2 className="mt-5">Login</h2>
          <p>Or Track Existing Application</p>
          <form onSubmit={handleSubmit}>
            {/* <label>Username</label><br></br>
            <input type='text' placeholder='Enter Username'  name='user' /><br></br><br></br> */}
            <label>Email</label>
            <br></br>
            <input
              onChange={handleOnChange}
              value={email}
              type="email"
              placeholder="Enter Email"
              name="email"
            />
            <br></br>
            <br></br>
            <label>password</label>
            <br></br>
            <input
              onChange={handleOnChange}
              value={password}
              type="password"
              placeholder="Enter password"
              name="password"
            />
            <br></br>
            <br></br>
            <div>
              <button
                style={{
                  width: "30%",
                  borderRadius: "5px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  height: "40px",
                }}
                type="submit"
              >
                Submit
              </button>
              <br></br>
              <br></br>
              <span>
                Dont have an account? <Link to={"/signup"}>Signup</Link>
              </span>
            </div>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
