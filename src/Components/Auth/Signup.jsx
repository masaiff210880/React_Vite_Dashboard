// import React, { useState } from "react";
import style from '../../Styles/Signup.module.css'
import logo from "../../assets/ad/logo.svg";
import google from "../../assets/ad/google.svg";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

import mailIcon from "../../assets/Icons/MailIcon.svg";
import { addUser } from "../../Redux/userReducer/action";
// import { useCreateUserMutation } from "../../features/Auth/authSlice";




const Signup = () => {

const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(7, "Username Must Contain 7-12 Characters")
      .max(12, "Username Must Contain 7-12 Characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required")
      .test((value) => {
        return value.endsWith("gmail.com");
      }),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.[A-Z]).$/,
        "Must contain at least one uppercase character (A-Z)"
      )
      .matches(
        /^(?=.[a-z]).$/,
        "Must contain at least one lowercase character (a-z)"
      )
      .matches(
        /^(?=.[0-9]).$/,
        "Must contain one number (0-9)"
      )
      .test("password-length", "Password must be between 8 and 20 characters", (value) => {
        return value.length >= 8 && value.length <= 20;
      })
      .test("password-special-characters", "Must contain at least one special character (!@#$%^&*)", (value) => {
        return /[!@#$%^&*]/.test(value);
      }),
  });

  const initialValue = {
    userName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);
  // const [newUser, setNewUser] = useCreateUserMutation(initialValue);


  // const handlePassword = () => {
  //   setShowPassword(!showpassword);
  // };

  const handleSignup = (values, { resetForm }) => {
   dispatch(addUser(values)).then(()=>{
    toast.success("Sign Up completed Successfully", {
      autoClose: 500, // Set the delay to 500 milliseconds
      onClose: () => {
        navigate("/");
      },
    });
   })
    resetForm()
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSignup}
      validationSchema={validationSchema}
    >
      <Form >
        <div className={style.container}>
          <div className={style.left_part}>
            <div className={style.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style.authInfo}>
              <h1>Streamline.</h1>
              <h1>Simplify.</h1>
              <h1>Succeed.</h1>
            </div>
            <div className={style.auth_description}>
              Unleash the Power of Efficient Inventory Management.
            </div>
          </div>
          <div className={style.cardStyle}>
            <div>
              <h1 className={style.LoginCardText}>Sign up</h1>
            </div>

            <div>
              <div style={{ display: "flex", marginLeft: "89px", marginBottom: '20px' }}>
                <FormControl className={style.signup_input} variant="outlined">
                  <span>Username</span>
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Enter Username"
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        placeholder="Enter Username"
                        style={{ backgroundColor: 'white', borderRadius: '12px' }}
                        id="outlined-adornment-password"
                        
                      />
                    )}
                  />
                </FormControl>
              </div>
              <ErrorMessage className={style.validationColor} name="userName" component="div" />
            </div>

            <div>

              <div style={{ display: "flex", marginLeft: "89px", marginBottom: '20px' }}>
                <FormControl className={style.signup_input} variant="outlined">
                  <span>Email</span>
                  <Field
                    type="text"
                    id="email"
                    className={style.inputs}
                    name="email"
                   
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        style={{ backgroundColor: 'white', borderRadius: '12px',}}
                        id="outlined-adornment-password"
                        placeholder="Enter Email"
                        inputProps={{
                          className: `${style.place_holder}`, // Apply the placeholder styling class
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <img src={mailIcon} alt="mailIcon" width={'100%'} />
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                </FormControl>
              </div>
              <ErrorMessage className={style.validationColor} style={{ width: '200px' }} name="email" component="div" />
            </div>

            <div>
              <div style={{ display: "flex", marginLeft: "89px", marginBottom: '20px' }}>
                <FormControl className={style.signup_input} variant="outlined">
                  <span>Password</span>
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    inputProps={{
                      className: `${style.place_holder}`, // Apply the placeholder styling class
                    }}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        className={style.signup_input111}
                        placeholder="Enter Password"
                        style={{ backgroundColor: 'white', borderRadius: '12px' }}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }

                      />
                    )}
                  />
                </FormControl>
              </div>
              <ErrorMessage className={style.validationColor} name="password" component="div" />
            </div>
            <div className={style.login_div}>
              <button className={style.btnLogin} type="submit">
                <span color='white' >Signup</span>
              </button>
            </div>
            <div className={style.google_div}>
              <button className={style.btnGoogle} type="submit">
                <img src={google} alt="google" />
                <span color='white' >Sign up With Google</span>
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;