import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem("token")));
export const isDarkModeVar = makeVar(true);
