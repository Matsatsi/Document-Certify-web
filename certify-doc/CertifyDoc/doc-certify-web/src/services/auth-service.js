import axios from "axios";
import config from "../config";
import { userDTO, loginDTO } from "./dto";
const { hostUrl } = config;

const userUrls = {
  login: `${hostUrl}/login`,
  register: `${hostUrl}/register`,
};

const login = (user) => {
  return axios
    .post(userUrls.login, loginDTO(user))
    .then((response) => response.data);
};

const register = (user) => {
  return axios
    .post(userUrls.register, userDTO(user))
    .then((response) => response.data);
};

export default {
  login,
  register,
};
