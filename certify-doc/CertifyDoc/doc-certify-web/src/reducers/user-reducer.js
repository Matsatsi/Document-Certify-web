import { create } from "zustand";
import { userModel } from "../models";
import localForage from "localforage";

export const userStore = create((set) => ({
  user: {},
  authenticated: false,
  removeUser: () => set({ user: {} }),
  login: (user) => {
    localForage.setItem("users", userModel(user.user));
    set({ user: userModel(user.user), authenticated: user.authenticated });
  },
  updateUser: (user) => set({ user: userModel(user) }),
  logout: () => {
    localForage.setItem("authenticated", false);
    set({ authenticated: false });
  },
}));
