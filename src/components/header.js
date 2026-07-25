import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends Component {
  render() {
    const { getLocaleString } = this.props;
    return (
      <div className="header">
        <h3>
          <Link to="/faq">
            <span className="FAQTextButton">{getLocaleString("FAQ/FAQ")}</span>
          </Link>
          <span> | </span>
          <a href="https://github.com/4PwP/mapartcraft" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span> | </span>
        </h3>
        <p>
          {getLocaleString("DESCRIPTION/1")}
          <br></br>
          Original github:
          <a href="https://github.com/rebane2001/mapartcraft" target="_blank" rel="noopener noreferrer">
            (rebane2001/mapartcraft)
          </a>
          <br></br>
          <b>
            {getLocaleString("FAQ/PLEASE-READ-1")}
            <Link to="/faq">
              <span className="FAQTextButton">{getLocaleString("FAQ/FAQ")}</span>
            </Link>
            {getLocaleString("FAQ/PLEASE-READ-2")}
          </b>
        </p>
      </div>
    );
  }
}

export default Header;
