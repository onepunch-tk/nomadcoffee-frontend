import {Outlet} from "react-router-dom";
import {useAuthValid, EPathName} from "../../shared/utils";
import styled from "styled-components";
import { AuthContainer } from "../../styles/auth/shared";


function Account() {
    useAuthValid(EPathName.Account);
    return (
        <AuthContainer>
            <Outlet/>
        </AuthContainer>
    );
}

export default Account;
