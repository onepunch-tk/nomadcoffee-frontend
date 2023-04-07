import { EPathName } from "../../shared/utils";
import { useAuthValid } from "../../libs/hooks";

function Home() {
  const [loading] = useAuthValid(EPathName.Home);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
