import PropTypes from "prop-types";

export const InputField = ({ label, name, type, onChange, ...rest }) => {
  return (
    <section className="py-2 flex flex-col">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete="email"
        required
        onChange={onChange}
        className="mt-1 h-10 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        {...rest}
      />
    </section>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
