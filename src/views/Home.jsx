import { NavLink } from "react-router-dom";

const Home = () => {
    const setActiveClass=({isActive})=>(isActive ? 'activeStyle':'inactiveStyle')
    return (
       <>
            <nav className="navbar">
                <NavLink to="/" className={setActiveClass}> Home </NavLink> |
                <NavLink to="/pokemon" className={setActiveClass}> Pokemon </NavLink>
            </nav>
            <h1>Welcome pokemon master</h1>
            <img src="pikachu.jpg"/>
       </>
        
        
       
      
    );
  };
  export default Home;