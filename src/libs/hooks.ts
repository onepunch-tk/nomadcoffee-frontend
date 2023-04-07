import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../states/apolloVar";
import { useLocation, useNavigate } from "react-router-dom";
import { EPathName, makeNestedPathName } from "../shared/utils";

export const useAuthValid = (caller: EPathName) => {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const navigate = useNavigate();
  useEffect(() => {
    if (caller === EPathName.Home) {
      //called from Home
      !isLoggedIn &&
        navigate(makeNestedPathName(EPathName.Account, EPathName.Login));
    } else {
      //called from Account
      isLoggedIn && navigate(EPathName.Home);
    }
    setLoading(false);
  }, [isLoggedIn, navigate, caller]);
  return [loading];
};

export const useTitle = () => {
  const { pathname } = useLocation();
  let title = "/";
  switch (pathname) {
    case EPathName.Home:
      title = "Home";
      break;
    case makeNestedPathName(EPathName.Account, EPathName.Login):
      title = "Log in";
      break;
    case makeNestedPathName(EPathName.Account, EPathName.SignUp):
      title = "Sign up";
      break;
  }

  return [title];
};
