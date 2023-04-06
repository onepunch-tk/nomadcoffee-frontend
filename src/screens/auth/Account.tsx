import {Outlet} from "react-router-dom";
import {EPathName, useAuthValid} from "../../shared/utils";
import {AuthContainer} from "../../styles/auth/shared";

function Account() {
    useAuthValid(EPathName.Account);
    return (
        <AuthContainer>
            <Outlet/>
        </AuthContainer>
    );
}

export default Account;
