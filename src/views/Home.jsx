import { NavLink } from "react-router-dom";

const Home = () => {
    const setActiveClass=({isActive})=>(isActive ? 'activeStyle':'inactiveStyle')
    return (
       <>
           <div className="main">
                <h1>Welcome pokemon master</h1>
                <img src="pikachu.jpg" style={{ width: '30rem' }}/>
           </div>

            </>
        
        
       
      
    );
  };
  export default Home;