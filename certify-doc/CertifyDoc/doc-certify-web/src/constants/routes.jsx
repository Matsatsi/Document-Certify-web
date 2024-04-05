import { TbUsersGroup } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsListTask } from "react-icons/bs";

export const ROUTES = {
  Admin: [
    {
      name: "Admins",
      path: "/admins",
      icon: <MdOutlineAdminPanelSettings />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <TbUsersGroup />,
    },
    {
      name: "Certifiers",
      path: "/certifiers",
      icon: <LiaCertificateSolid />,
    },
  ],
  Certifier: [
    {
      name: "Jobs",
      path: "/jobs",
      icon: <BsListTask />,
    },
  ],
  User: [
    {
      name: "Certify Docs",
      path: "/new-doc",
      icon: <LuUpload />,
    },
    {
      name: "My Docs",
      path: "/docs",
      icon: <IoDocumentsOutline />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FiSettings />,
    },
  ],
};
