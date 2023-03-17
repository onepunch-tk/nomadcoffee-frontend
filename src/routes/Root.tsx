import {Outlet, useMatch} from "react-router-dom";
import {useReactiveVar} from "@apollo/client";
import {isDarkModeVar, isSignInVar} from "../states/apolloVar";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

function Root() {
    const homeMatch = useMatch("/");
    const isSignIn = useReactiveVar(isSignInVar);
    const isDark = useReactiveVar(isDarkModeVar);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            {homeMatch ? (isSignIn ? <Home/> : <SignIn/>) : (<Outlet/>)}
        </ThemeProvider>
    );
}

export default Root;