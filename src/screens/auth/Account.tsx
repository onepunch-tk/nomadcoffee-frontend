import {Outlet} from "react-router-dom";
import {CheckAuthValid, EPathName} from "../../shared/utils";
import styled from "styled-components";
import {BaseFlex} from "../../styles/shared";

const Container = styled(BaseFlex)`
  width: 100vw;
  height: 100vh;
`;

function Account() {
    CheckAuthValid(EPathName.Account);
    return (
        <Container>
            <Outlet/>
        </Container>
    );
}

export default Account;