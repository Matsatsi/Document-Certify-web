import { AuthRouter } from "./auth-routes";
import { AppRouter } from "./app-routes";
import { userStore } from "../reducers";
import localforage from "localforage";
import { useState } from "react";
import { isEmpty } from "lodash";
import { useEffect } from "react";

export const RootRouter = () => {
  const { authenticated, user } = userStore();
  const [verified, setVerified] = useState(authenticated);
  const [locUser, setLocUser] = useState();
  localforage.getItem("authenticated").then((res) => {
    setVerified(res);
  });

  useEffect(
    () => void localforage.getItem("user").then((res) => setLocUser(res)),
    []
  );

  return (verified && (!isEmpty(user) || !locUser)) || authenticated ? (
    <AppRouter />
  ) : (
    <AuthRouter />
  );
};
