import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.css";
import Button from "./Button";
export const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      {/* <h1 style={HeadingStyle}>{title} </h1> */}
      <h1 class="HeadingStyle">{title} </h1>
      {/* <button className="btn">Add</button> */}
      <Button color="red" text="Add" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "Titleee"
};
Header.PropTypes = {
  title: PropTypes.string.isRequired
};
//CSS IN JS
// const HeadingStyle = {
//   color: "red",
//   backgroundColor: "black"
// };
