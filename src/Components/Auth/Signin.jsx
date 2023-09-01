import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import mailIcon from "../../assets/Icons/MailIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "../../Styles/Signin.module.css";
import logo from "../../assets/ad/logo.svg";
import { BE_BASE_URL } from "../../Base Url";
import axios from "axios";

const Signin = () => {
  const [isAuth, setIsAuth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const dispatch = useDispatch();
  //   const isAuth = Cookies.get('userInfo');
  //  const isAuth = useSelector((store)=>store.userReducer.users.data)
  const navigate = useNavigate();
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(`${BE_BASE_URL}api/user/login`, values)
      .then((res) => {
        setIsAuth(res.data.status);
      })
      .catch((error) => {
        toast.error("Login Failed",{
            autoClose: 500, 
        });
      });
    resetForm();
  };
  if (isAuth) {
    // Cookies.set(...) // Keep this part as it is

    // Show notification toast with medium response
    toast.success("Login Successful!", {
      autoClose: 500, // Set the delay to 500 milliseconds
      onClose: () => {
        navigate("/dashboard");
      },
    });
  }

  return (
    <div className={style.container}>
      <div>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.authInfo}>
          <h1>STREAMLINE.</h1>
          <h1>SIMPLIFY.</h1>
          <h1>SUCCEED.</h1>
        </div>
        <div className={style.auth_description}>
          Unleash the Power of Efficient Inventory Management.
        </div>
      </div>
      <div className={style.cardStyle}>
        <div>
          <h1 className={style.LoginCardText}>Login to your account!</h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form>
              {/* Email */}
              <h4 className={style.LoginSmallText}>Email Address</h4>
              <div style={{ display: "flex", marginLeft: "89px" }}>
                <Field name="email">
                  {({ field }) => (
                    <FormControl
                      sx={{ m: 1, width: "45ch", height: "80px" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        {...field}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "12px",
                        }}
                        id="outlined-adornment-password"
                        value={values.email}
                        type="text"
                        placeholder="Youraddres@email.com"
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <img src={mailIcon} alt="mailIcon" width={"100%"} />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style.error}
                />
              </div>

              {/* Password */}
              <h4 className={style.passeTextSmall}>Password</h4>
              <div
                style={{
                  display: "flex",
                  marginLeft: "89px",
                  marginTop: "-45px",
                }}
              >
                <Field name="password">
                  {({ field }) => (
                    <FormControl
                      sx={{ m: 1, width: "45ch", height: "80px" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        {...field}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "12px",
                        }}
                        onChange={handleChange}
                        value={values.password}
                        id="outlined-adornment-password"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handlePassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.auth_checkbox_forgot}>
                <div
                  className="checkbox"
                  style={{ marginTop: "5px", marginLeft: "52px" }}
                >
                  <input type="checkbox" />
                  <span>Keep me Signed In</span>
                </div>
                <div
                  className={style.forgo_password}
                  style={{ marginRight: "130px" }}
                >
                  <span>Forgot Password?</span>
                </div>
              </div>

              <div>
                <button className={style.btnLogin} type="submit">
                  <span color="white">Login</span>
                </button>
              </div>
              <div>
                <h1 className={style.hText}>Don’t have an account?</h1>
                <Link to={"/signup"}>
                  <span className={style.sText}>Sign up</span>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
