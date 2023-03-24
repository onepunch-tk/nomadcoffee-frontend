import {CheckAuthValid, EPathName} from "../../shared/utils";

function Home() {
    CheckAuthValid(EPathName.Home);
    return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
