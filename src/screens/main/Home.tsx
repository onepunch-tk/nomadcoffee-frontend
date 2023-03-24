import {CheckAuthValid} from "../../shared/utils";

function Home() {
    CheckAuthValid();
    return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
