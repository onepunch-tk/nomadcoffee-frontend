import {useLocation, useNavigate} from "react-router-dom";
import {isLoggedInVar} from "../states/apolloVar";
import {useReactiveVar} from "@apollo/client";
import {useEffect} from "react";

export enum EPathName {
    Home = "/",
    Account = "/account",
    Login = "/login",
    SignUp = "/signup"
}

export const makeNestedPathName = (...pathList: string[]): string => {
    let nestedPathName = "";
    pathList.forEach(path => {
        nestedPathName = nestedPathName + path
    });
    return nestedPathName;
};

export const getPathWithoutSlash = (path: EPathName) => {
    if (path === EPathName.Home) {
        return path;
    }
    return path.slice(1);
}

export const GetTitle = () => {
    const {pathname} = useLocation();
    let title = "/";
    switch (pathname) {
        case EPathName.Home:
            title = "Home"
            break;
        case makeNestedPathName(EPathName.Account, EPathName.Login):
            title = "Log in"
            break;
        case makeNestedPathName(EPathName.Account, EPathName.SignUp):
            title = "Sign up"
            break;
    }

    return title;
};

export const useAuthValid = (caller: EPathName) => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const navigate = useNavigate();
    useEffect(() => {
        if (caller === EPathName.Home) {
            //called from Home
            !isLoggedIn && navigate(makeNestedPathName(EPathName.Account, EPathName.Login));
        } else {
            //called from Account
            isLoggedIn && navigate(EPathName.Home);
        }
    }, [isLoggedIn, navigate, caller]);
}
