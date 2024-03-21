import React from "react";
import styled from "styled-components";
import SignIn from "../components/GoogleAuth";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik"
import axios from "axios"

import * as Yup from "yup";
const LoginPage = () => {
  const router= useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async(values,action) => {
        const response = await axios.post("http://localhost:5000/api/login",{
          name: values?.name,
          email:values?.email,
          password: values?.password
        })
        if(response?.data?.success){
          alert("login Success")
          action.resetForm();
          localStorage.setItem("AUTHTOKEN",response?.data?.data?.token)
          localStorage.setItem("User",JSON.stringify(response?.data?.data?.user))
          router("/")
        }
        else{
          alert("Registration failed")
        }
        
    }
  })
  return (
    <Wrapper>
      <div className="form-container">
        <div className="logo-container">Dashbord</div>

        <div className="social-buttons">
         
          <SignIn />
 
        </div>
        <div className="line"></div>
        <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

         

          <button type="submit" className="form-submit-btn">
            Sign In
          </button>
        </form>

        <a className="forgot-password-link link" href="#">
          Forgot Password
        </a>

        <p className="signup-link">
          Don't have an account?
          <a className="signup-link link" href="/signup">
            {" "}
            Sign up now
          </a>
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 350px;
    background-color: #262626;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084),
      0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .logo-container {
    margin-bottom: 12px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }

  .form-container .social-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .form-container .social-button {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: inherit;
    color: #fff;
    border: none;
    padding: 12px 16px;
    gap: 8px;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084),
      0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container .social-button svg {
    width: 22px;
    height: 22px;
    fill: white;
  }



  .form-container .social-button.apple {
    background-color: #212121;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-container .form-group input[type="text"],
  .form-container .form-group input[type="password"] {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input {
    outline: none;
    border: 1px solid #3f3f40;
    background-color: transparent;
    color: #fff;
  }

  .form-container .form-submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #fff;
    background-color: #212121;
    border: none;
    width: 100%;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084),
      0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container .form-submit-btn:hover {
    background-color: #313131;
  }

  .form-container .link {
    color: #1778f2;
    text-decoration: none;
  }

  .form-container .forgot-password-link {
    align-self: flex-end;
    margin-top: -20px;
  }

  .form-container .signup-link {
    align-self: center;
    font-weight: 500;
  }

  .form-container .signup-link .link {
    font-weight: 400;
  }

  .form-container .link:hover {
    text-decoration: underline;
  }

  .form-container .line {
    width: 100%;
    height: 1px;
    background-color: #212121;
    opacity: 0.1;
  }
`;
export default LoginPage;
