import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
    const {pokemon}=useContext(PokeContext);
    const [pokemonSelected, setPokemonSelected]=useState("");
    const navigate=useNavigate();

    const goToDetail=()=>{
        navigate(`/pokemon/${pokemonSelected}`)

    }
    const handleChange= (e)=>{
        console.log(e.target.value);
        setPokemonSelected(e.target.value);
       
    }
    return (
      <>
        <select value={pokemonSelected} onChange={handleChange}>
        <option value="pokemon">pokemon</option>
            {pokemon.map((item, i)=>(
                <option value={item.name}>{item.name}</option>
            )

            )}
        </select>
        <button onClick={goToDetail}>Go to Details</button>
      </>
    );
  };
  export default Pokemon;