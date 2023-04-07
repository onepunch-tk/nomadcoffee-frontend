import { Outlet } from "react-router-dom";
import { EPathName } from "../../shared/utils";
import { AuthContainer } from "../../styles/auth/shared";
import { useAuthValid } from "../../libs/hooks";

function Account() {
  const [loading] = useAuthValid(EPathName.Account);
  return <AuthContainer>{!loading ? <Outlet /> : null}</AuthContainer>;
}

export default Account;
