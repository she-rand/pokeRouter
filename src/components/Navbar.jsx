import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActiveClass=({isActive})=>(isActive ? 'activeStyle':'inactiveStyle')
    return (
      <nav className="navbar">
        <NavLink to="/" className={setActiveClass}> Home </NavLink> |
         <NavLink to="/pokemon" className={setActiveClass}> Pokemon </NavLink>
      </nav>
    );
  };
  export default Navbar;
  