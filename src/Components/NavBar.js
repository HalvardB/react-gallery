import React from "react";
import PropTypes from "prop-types";

const NavBar = props =>
  <nav class="main-nav">
    <ul>
      <li><a href='#'>Cats</a></li>
      <li><a href='#'>Dogs</a></li>
      <li><a href='#'>Computers</a></li>
    </ul>
  </nav>

  NavBar.propTypes = {

  }

export default NavBar;
