import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  return (
    <DIV>
      <div className="logo">Kamran</div>
      <div className="nav-Links">
        <Link className="nav-link home" to="/">
          Home
        </Link>
        <Link className="nav-link about" to="/about">
          About
        </Link>
        <Link className="nav-link skills" to="/skills">
          Skills
        </Link>
        <Link className="nav-link projects" to="/project">
          Project
        </Link>
        <Link className="nav-link contact" to="/contact">
          Contact
        </Link>
        <Link className="nav-link resume">Resume</Link>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .nav-Links {
    /* align-items: center; */
    border: 1px solid black;
    padding: 10px 60px 20px 60px;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    border: 1px solid;
    padding: 20px;
  }
`;
