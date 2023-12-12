import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const PokeContextProvider = ({children}) => {
    const [pokemon,setPokemon]=useState([]);
   
    useEffect(()=>{
        const getData= async() =>{
            const response=await fetch("https://pokeapi.co/api/v2/pokemon")
             const data=await response.json()
             setPokemon(data.results)
             console.log(data.results)
         }
        getData()
    },[])
    

    return (
      <PokeContext.Provider value={{pokemon,setPokemon}}>
        {children}
      </PokeContext.Provider>
    );
  };
export default PokeContextProvider;