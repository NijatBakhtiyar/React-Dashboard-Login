import React, { useState } from "react";
import styles from "./Login.module.scss";
import { FaUser } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Formik } from "formik";
import { LoginSchema } from "./LoginSchema";
import LoadingIcon from "../../images/loadingIcon";
import { validate } from "../../redux/auth";
import { useDispatch } from "react-redux";
import AdminLayouts from "../../routes/AdminLayouts";
import { useNavigate } from "react-router-dom";

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
              console.log(values);

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
                    />
                  </div>
                  <span className={styles.icon} onClick={() => setShow(!show)}>
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
                        params={{ color: "red", width: 46, height: 46 }}
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
