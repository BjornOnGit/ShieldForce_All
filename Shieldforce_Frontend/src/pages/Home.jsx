import React from "react";
import NavbarComp from "../components/Navbar/NavbarComp";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <NavbarComp />

      <div className="main">
        <div className="right">
          <div className="text">
            <h4 id="first">We are obsessed with</h4>
            <p>
              {" "}
              <i>protecting Americans from African, European</i>{" "}
            </p>
            <h4>
              <i>and Asian scammers</i>
            </h4>
          </div>
          <Button className="start">
            {" "}
            <Link className="link" to={"/signin"}>
              Start today
            </Link>
          </Button>

          <Button className="view-bundles">
            <Link className="link" to={"/products"}>
              View Bundles & Pricing
            </Link>
          </Button>
        </div>

        <div className="left">
          <img
            src="https://webimg.secondhandapp.at/w-i-mgl/5ce30a38bcede243db5b2d99"
            alt="brand"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
