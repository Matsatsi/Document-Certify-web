import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets";
import { CgProfile } from "react-icons/cg";

export const AuthNav = () => {
  return (
    <nav className="flex justify-between bg-white drop-shadow-xl">
      <Link to="/">
        <img src={LogoIcon} className="h-14" alt="logo" />
      </Link>
      <Link
        to="/profile"
        className="flex px-3 items-center hover:text-blue-500"
      >
        <CgProfile className="w-8 h-8 hover:text-secondary" />
      </Link>
    </nav>
  );
};
