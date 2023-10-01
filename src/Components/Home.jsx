import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  return (
    <div>
      <h3>This is Home</h3>
    </div>
  );
};

export default Home;
