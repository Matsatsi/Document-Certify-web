import axios from "axios";
import config from "../config";
import { userModel, usersModel } from "../models";
import { userDTO } from "./dto";

const { hostUrl } = config;

const userUrls = {
  user: (id) => `${hostUrl}/users/${id}`,
  users: `${hostUrl}/users`,
};

const getUser = (id) => {
  return axios
    .get(userUrls.user(id))
    .then((response) => userModel(response.data));
};

const updateUser = (user) => {
  return axios
    .put(userUrls.user(user?.userID), userDTO(user))
    .then((response) => response.data);
};

const getUsers = () => {
  return axios
    .get(userUrls.users)
    .then((response) => usersModel(response.data));
};

const deleteUser = (id) => {
  return axios.delete(userUrls.user(id)).then((response) => response.data);
};



export default {
  getUser,
  getUsers,
  updateUser,
  deleteUser
};
