/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Formik } from "formik";
import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingIcon from "../../images/loadingIcon";
import { validate } from "../../redux/auth";
import AdminLayouts from "../../routes/AdminLayouts";
import styles from "./Login.module.scss";
import { LoginSchema } from "./LoginSchema";

function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AdminLayouts>
      <div className={styles.loginPage}>
        <div className={styles.backdrop}></div>
        <div className={styles.loginForm}>
          <Formik
            initialValues={{ username: "", password: "", checkbox: false }}
            onSubmit={(values, { resetForm }) => {
              setLoading(true);
              dispatch(validate({ values }));

              if (values.checkbox) {
                localStorage.setItem("login", JSON.stringify(values));
              }

              setTimeout(() => {
                setLoading(false);
                resetForm();
                navigate("/dashboard");
              }, 2000);
            }}
            validationSchema={LoginSchema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className={styles.formGroup}>
                  <span className={styles.icon}>
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <span className={styles.error}>
                  {touched.username && errors.username}
                </span>
                <div className={styles.formGroup}>
                  <div>
                    <span className={styles.icon}>
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <span
                    className={styles.icon}
                    onClick={() => setShow(!show)}
                  >
                    <BiShow />
                  </span>
                </div>
                <span className={styles.error}>
                  {touched.password && errors.password}
                </span>
                <div className={styles.checkBox}>
                  <input
                    type="checkbox"
                    id="remember"
                    name="checkbox"
                    value={values.checkbox}
                    onChange={handleChange}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className={styles.formBtn}>
                  <button>
                    {loading ? (
                      <LoadingIcon
                        params={{
                          color: "hsl(238deg 100% 73%)",
                          width: 46,
                          height: 46,
                        }}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </AdminLayouts>
  );
}

export default Login;
