import { Link, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

import { userStore } from "../../reducers";
import { IoHomeOutline } from "react-icons/io5";
import { Line } from "../common";
import { ROUTES } from "../../constants";

export const AppNav = () => {
  const { logout, user } = userStore();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-primary text-white h-full w-56 flex-shrink-0 p-4">
      <ul className="flex flex-col gap-4">
        <li key={0}>
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-500 pb-1"
          >
            <IoHomeOutline />
            Dashboard
          </Link>
          {isActive("/") && <Line />}
        </li>
        {ROUTES[user.role]?.map((route, index) => (
          <li key={index + 1}>
            <Link
              to={route.path}
              className="flex items-center gap-2 hover:text-blue-500 pb-1"
            >
              {route.icon}
              {route.name}
            </Link>
            {isActive(route.path) && <Line />}
          </li>
        ))}
      </ul>

      <Link
        onClick={logout}
        to="/login"
        className="flex items-center absolute bottom-0 mb-6 hover:text-blue-500"
      >
        <CiLogout className="mr-2" />
        Logout
      </Link>
    </div>
  );
};
