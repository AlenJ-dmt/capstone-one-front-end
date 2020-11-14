import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./home.css";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";

const Home = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const checkCredentials = () => {
    if (username !== "userOne" || password !== "password") {
      setError(true);
      return
    }
    window.location.replace(window.location.href + "search");
    setError(false);
  };


  return (
    <>
      <section id="home-section">
        <div className="login-form">
          <img src={logo} height="100" />
          <div
            id="card"
            style={{ background: colors.postBlue, height: 200, width: 300 }}
          >
            <div style={{ position: "absolute", bottom: 80 }}>
              <p>Sign In</p>
              <input
                className="user-input"
                placeholder="email"
                onChange={(ev) => setUsername(ev.target.value)}
              />
              <input
                type="password"
                style={{ marginTop: 20 }}
                className="user-input"
                placeholder="password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
          </div>
          <CustomButton
            onClickDo={() => checkCredentials()}
            color={colors.postBlue}
            styles={{ marginTop: 20, width: 300 }}
          >
            Continue
          </CustomButton>
          <p> Demo User: userOne Password: password</p>
          
          {error && (
            <div style={{ fontSize: 15, color: "red" }}>
              <p>Invalid name or password!</p>
            </div>
          )}
        </div>
        <div className="description">
          <h1>About Redline</h1>
          <p>
            Redline provides a user-friendly inventory interface for tire and
            wheel shops. As a shop, you will be able to add and search for
            items, with a dropdown system that will avoid any type of errors.
            Old systems provide too many options which sometimes results
            overwhelming. With Redline forget about the old boring inefficient
            inventory system. Welcome to the future.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
