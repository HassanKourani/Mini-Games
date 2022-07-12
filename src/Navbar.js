import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="title">Mini games</h1>
      <Link className="links" to="/">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
