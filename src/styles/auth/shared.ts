import styled from "styled-components";
import { BaseBox, BaseFlex } from "../shared";

export const AuthContainer = styled(BaseFlex)`
  width: 100vw;
  height: 100vh;
`;

export const AuthWrapper = styled(BaseFlex)`
  flex-direction: column;
  width: 25rem;
`;

export const AuthTopBox = styled(BaseBox)`
  padding: 35px 40px;
`;

export const AuthBottomBox = styled(BaseBox)`
  margin-top: 30px;
  padding: 25px 0;
  font-size: 1rem;

  a {
    font-weight: 600;
    color: ${(props) => props.theme.middleAccent};
    margin-left: 5px;

    &:hover {
      color: ${(props) => props.theme.deepAccent};
    }

    transition: all 0.2s ease-in-out;
  }
`;
