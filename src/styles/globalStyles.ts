import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color:${props => props.theme.mainFont};
    background-color: ${props => props.theme.deepBg};
  }
  a {
    text-decoration: none;
  }
`;

export default globalStyles;