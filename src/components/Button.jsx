import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  return <div>{props.name}</div>;
};
Button.propTypes = {
  name: PropTypes.string,
};
