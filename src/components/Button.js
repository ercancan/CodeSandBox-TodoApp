import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, text: text }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue"
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func
};
export default Button;
