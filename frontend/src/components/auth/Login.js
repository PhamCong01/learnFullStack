import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import api from '../api'
import { AiFillGoogleCircle } from "react-icons/ai";
import styles from "./auth.module.css";
export default function Login() {
  const [ valueName, setValueName ] = useState("");
  const [valuePassword, setValuePassword ] = useState("");

  const handleLoginWithUser = async () => {
    const formData = new FormData();
    formData.append("name", valueName);
    formData.append("password", valuePassword);
    if(formData != "") {
      await axios.post(`http://localhost:3000/auth/login`, formData)
        .then(data => {
          console.log(data);
        })
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentInput}>
          <div className={styles.logo}>
            <img
              className={styles.logoBlog}
              src="https://i.pinimg.com/originals/9d/16/87/9d1687fe53247d0da876e4bff2e3ce64.png"
            />
            <h3 className={styles.titleBlog}>Welcome to Blog by Pham Cong</h3>
          </div>
          <div className={styles.inputContainerLogin}>
            <form className={styles.formLogin}>
              <div className={styles.userName}>
                <label className={styles.labelName} forhtml="nameInput">
                  UserName
                </label>
                <input
                  className={styles.inputName}
                  value={valueName}
                  onChange={(e) => setValueName(e.target.value)}
                  name="name"
                  placeholder="User Name ...."
                  id="nameInput"
                />
              </div>
              <div className={styles.userName}>
                <label className={styles.labelPassword} forhtml="inputPass">
                  Password
                </label>
                <input
                  type="password"
                  value={valuePassword}
                  onChange={(e) => setValuePassword(e.target.value)}
                  className={styles.inputPass}
                  name="password"
                  placeholder="Password...."
                  id="inputPass"
                />
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  Forgot your password
                </Link>
              </div>
            </form>
          </div>

          <div className={styles.buttonLoginContainer} onClick={handleLoginWithUser}>
            <button className={styles.buttonLogin}>Log in</button>
          </div>
          <span className={styles.or}>OR</span>
          <div className={styles.buttonLoginWithFacebook}>
            <button className={styles.buttonLoginFacebook}>
              <BsFacebook /> Continue with Facebook
            </button>
          </div>
          <div className={styles.buttonLoginWithGoogle}>
            <button className={styles.LoginWithGoogle}>
              <AiFillGoogleCircle /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
