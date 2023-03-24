import {Outlet, useMatch} from "react-router-dom";
import {useReactiveVar} from "@apollo/client";
import {isDarkModeVar, isLoggedInVar} from "../states/apolloVar";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import {Helmet} from "react-helmet";
import {GetTitle} from "../shared/utils";

function Root() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const isDark = useReactiveVar(isDarkModeVar);
    const title = GetTitle();

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Helmet>
                <title>{`${title} | NomadCoffee`}</title>
            </Helmet>
            <Outlet/>
        </ThemeProvider>
    );
}

export default Root;