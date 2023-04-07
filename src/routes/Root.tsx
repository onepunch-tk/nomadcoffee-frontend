import { Outlet } from "react-router-dom";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { isDarkModeVar } from "../states/apolloVar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import { Helmet } from "react-helmet";
import { client } from "../shared/graphql/apolloClient";
import { useTitle } from "../libs/hooks";

function Root() {
  const isDark = useReactiveVar(isDarkModeVar);
  const [title] = useTitle();

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
