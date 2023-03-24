import {Outlet} from "react-router-dom";
import {CheckAuthValid, EPathName} from "../../shared/utils";
import styled from "styled-components";

const BaseContainer = styled.div`
  width: 100vw;
  height: 100vw;
`;

function Account() {
    CheckAuthValid(EPathName.Account);
    return (
        <BaseContainer>
            <Outlet/>
        </BaseContainer>
    );
}

export default Account;