import PropTypes from "prop-types";

export const Widget = ({ children }) => {
  return (
    <section className="bg-white drop-shadow-lg w-full rounded-xl p-5">
      {children}
    </section>
  );
};

Widget.propTypes = {
  children: PropTypes.node.isRequired,
};
