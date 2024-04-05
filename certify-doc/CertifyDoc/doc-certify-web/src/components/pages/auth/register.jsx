import { SyncFilesImage } from "../../../assets";
import { RegisterForm } from "../../forms";

export const RegisterPage = () => {
  return (
    <section className="flex bg-primary items-center h-full">
      <section className="w-full md:w-1/2 bg-white h-full flex justify-center">
        <RegisterForm />
      </section>
      <section className="hidden lg:w-1/2 md:flex bg-primary justify-center">
        <img
          src={SyncFilesImage}
          alt="login"
          className="object-cover hidden lg:block"
        />
      </section>
    </section>
  );
};
