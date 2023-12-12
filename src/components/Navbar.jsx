import { NavLink } from "react-router-dom";
import PokemonLogo from  '/pokemon.svg'

const Navbar = () => {
    const setActiveClass=({isActive})=>(isActive ? 'activeStyle':`undefined`)
    return (
      <nav className="navbar">
        <img src={PokemonLogo}  style={{ width: '3rem' }}alt="React Logo" />
        <div>
            <NavLink to="/" className={setActiveClass}> Home </NavLink> |
            <NavLink to="/pokemon" className={setActiveClass}> Pokemon </NavLink>
        </div>
      </nav>
    );
  };
  export default Navbar;
  