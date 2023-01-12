import "./admin.scss";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="sectionadmin">
      <h2>Welcome Admin</h2>
      <form className="formad">
        <label className="formlog" htmlFor="username">
          Login :
        </label>
        <input type="textad" id="username" required />
        <label className="formlog" htmlFor="password">
          Password :
        </label>
        <input type="password" id="password" required />
        <Link id="home" className="menu-item" to="/adminpage">
          <input type="submit" />
        </Link>
      </form>
    </div>
  );
}
