import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("/signup");
      }
      const { data } = await axios.post(
        "http://localhost:3002",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
          
            position: "top-right",
            autoClose: 5000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          
          })
        : (removeCookie("token"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    toast.info("Logged out successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    navigate("/signup");
  };
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-body-tertiary mx-3  ">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/'>
            <img src="media/images/logo.svg" style={{width:'30%'}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav-links" id="navbarNav">
            <ul class="navbar-nav">
              {!username &&(
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/signup'>
                  Singup
                </Link>
              </li>
                )}
              <li class="nav-item">
                <Link class="nav-link" to='/about'>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/product'>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to='/pricing'>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to='/support'>
                  Support
                </Link>
              </li>
              {username ? 
              // <li onClick={Logout} class="nav-item">
              //   <Link class="nav-link " to='/support'>
              //    <span>{username}</span>
              //     Logout
              //   </Link>
              <li className="nav-item d-flex">
              <span className="nav-link" style={{ marginRight: '10px',color:'magenta' }}>Hello, {username}</span>
              <button onClick={Logout} className="btn btn-link nav-link">Logout</button>
            </li>
                :
                 <li className="nav-item">
                 <Link className="nav-link" to="/login"></Link>
               </li>
                }
            </ul>
          </div>
        </div>
      </nav>
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
  );
};

export default Navbar;
