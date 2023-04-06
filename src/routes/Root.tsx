import { Outlet } from "react-router-dom";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { isDarkModeVar } from "../states/apolloVar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import { Helmet } from "react-helmet";
import { GetTitle } from "../shared/utils";
import { client } from "../shared/graphql/apolloClient";

function Root() {
  const isDark = useReactiveVar(isDarkModeVar);
  const title = GetTitle();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Helmet>
          <title>{`${title} | NomadCoffee`}</title>
        </Helmet>
        <Outlet />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default Root;
