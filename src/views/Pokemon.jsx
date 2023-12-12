import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Pokemon = () => {
    const {pokemon}=useContext(PokeContext);
    const [pokemonSelected, setPokemonSelected]=useState("");
    const navigate=useNavigate();

    const goToDetail=()=>{
        if(pokemonSelected==="pokemon"){
            alert("Select a pokemon")
        }else{
            navigate(`/pokemon/${pokemonSelected}`)
        }
        

    }
    const handleChange= (e)=>{
        console.log(e.target.value);
        
        setPokemonSelected(e.target.value);
       
    }
    return (
      <>
        <div className="main">
            <h2 className="m-2">Select a Pokemon</h2>
            <select value={pokemonSelected} onChange={handleChange}>
            <option value="pokemon">pokemon</option>
                {pokemon.map((item, i)=>(
                    <option value={item.name}>{item.name}</option>
                )

                )}
            </select>
            <button type="button"  className="btn btn-dark m-3" onClick={goToDetail}>Go to Details</button>
        
        </div>
        </>
    );
  };
  export default Pokemon;