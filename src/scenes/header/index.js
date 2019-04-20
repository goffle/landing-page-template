import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Container, Row, Col, Button } from "reactstrap";
import classnames from "classnames";

import MenuBtn from "../../assets/menu.png";
import "./index.less";

class Header extends React.Component {
  state = {
    menuOpen: false
  };

  render() {
    return (
      <header className="header-top">
        <div
          onClick={() => this.setState({ menuOpen: true })}
          className="menu-btn"
          style={{ backgroundImage: `url(${MenuBtn})` }}
        />
        <div
          className={classnames({ open: this.state.menuOpen }, "inner-header")}
          onClick={() => this.setState({ menuOpen: false })}
        >
          <Row className="mobile-menu">
            <Col md={2}>
              <NavLink className="name" smooth to="/">
                Hireflow
              </NavLink>
            </Col>
            <Col className="menu">
              <ul>
                <li>
                  <HashLink exact smooth to="/#overview">
                    Overview
                  </HashLink>
                </li>
                <li>
                  <HashLink exact smooth to="/#what">
                    What is Hireflow
                  </HashLink>
                </li>
                <li>
                  <HashLink exact smooth to="/#why">
                    Problems solved
                  </HashLink>
                </li>
                <li>
                  <HashLink exact smooth to="/#how">
                    The solution
                  </HashLink>
                </li>
                <li>
                  <HashLink exact smooth to="/#pricing">
                    Pricing
                  </HashLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

export default Header;
