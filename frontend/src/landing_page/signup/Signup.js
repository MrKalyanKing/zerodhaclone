import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // toastify container
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
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
      username: "",
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-6 mt-5">
          <img src="media/images/signup.png" />
        </div>
        <div className="col-6 text-center mt-5 ">
          <h2 className="mt-5">SignUp</h2>
          <p>Or Track Existing Application</p>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <br></br>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
            />
            <br></br>
            <br></br>
            <label>Email</label>
            <br></br>
            <input
              onChange={handleOnChange}
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
            />
            <br></br>
            <br></br>
            <label>password</label>
            <br></br>
            <input
              onChange={handleOnChange}
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
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
                Already have an account? <Link to={"/login"}>Login</Link>
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

export default Signup;
