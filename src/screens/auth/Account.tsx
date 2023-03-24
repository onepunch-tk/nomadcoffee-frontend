import {Outlet} from "react-router-dom";
import {CheckAuthValid, EPathName} from "../../shared/utils";

function Account() {
    CheckAuthValid(EPathName.Account);
    return (
      <Outlet/>
    );
}

export default Account;