import { useFormik } from "formik";
import { FormLayout } from "../layouts";
import { InputField } from "../common";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";
import { AuthService } from "../../services";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const generateUsername = (firstName, lastName) => {
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${Math.floor(
      Math.random() * 100
    )}`;
    return username;
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      roleID: 3,
      password: "",
      phone: "",
    },

    onSubmit: (values) => {
      const newValues = values;
      newValues.username = generateUsername(
        values.firstName.slice(0, 3),
        values.lastName.slice(0, 4)
      );
      AuthService.register(newValues)
        .then(() => {
          toast.success("Account created successfully. Please login.", {
            duration: 3000,
          });

          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.message);
          toast.error("Failed to create account. Please try again.");
        });
    },
  });

  return (
    <FormLayout>
      <section className="flex justify-center items-center">
        <img src={LogoIcon} alt="logo" className="" />
      </section>
      <form className="py-2 px-5" onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          placeholder="First Name"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
        />
        <InputField
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={values.lastName}
        />
        <InputField
          label="Email"
          placeholder="Email"
          name="email"
          type="text"
          onChange={handleChange}
          value={values.email}
        />
        <InputField
          placeholder="Password"
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        <InputField
          placeholder="Phone Number"
          label="Phone Number"
          name="phone"
          type="phone"
          onChange={handleChange}
          value={values.phone}
        />
        <section className="flex justify-between items-center px-5 pb-10">
          <p className="text-xs text-primary">Already registered?</p>
          <Link
            to="/login"
            className="text-xs text-blue-600 hover:text-blue-500"
          >
            I have an account
          </Link>
        </section>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </FormLayout>
  );
};
