import PropTypes from "prop-types";
export const FormLayout = ({ children }) => {
  return <section className="p-5 w-full flex flex-col">{children}</section>;
};

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
