import { useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext.jsx";

export const Menu = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <div>
        {isAuthenticated ? (
          <Link to="/profile/dashboard">Dashboard</Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Menu;
