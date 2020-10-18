import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import "./home.css";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";

const Home = (props) => {
  const history = useHistory();
  return (
    <>
      <section id="home-section">
        <img src={logo} height="100" />
        <div
          id="card"
          style={{ background: colors.postBlue, height: 200, width: 300 }}
        >
          <div style={{ position: "absolute", bottom: 80 }}>
            <p>Sign In</p>
            <input className="user-input" placeholder="email" />
            <input
            type='password'
              style={{ marginTop: 20 }}
              className="user-input"
              placeholder="password"
            />
          </div>
        </div>
        <CustomButton
          onClickDo={() => window.location.replace(window.location.href + 'search')}
          color={colors.postBlue}
          styles={{ marginTop: 20, width: 300 }}
        >
          Continue
        </CustomButton>
      </section>
    </>
  );
};

export default Home;
