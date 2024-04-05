import PropTypes from "prop-types";

export const Heading = ({ heading }) => {
  return (
    <header className="flex flex-col gap-3">
      <h1 className="text-4xl text-primary font-bold">{heading}</h1>
      <section className="bg-gradient-to-r from-secondary to-white h-1 w-16" />
    </header>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
