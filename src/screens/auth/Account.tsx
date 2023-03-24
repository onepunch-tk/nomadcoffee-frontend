import {Outlet} from "react-router-dom";
import {CheckAuthValid} from "../../shared/utils";

function Account() {
    CheckAuthValid();
    return (
      <Outlet/>
    );
}

export default Account;