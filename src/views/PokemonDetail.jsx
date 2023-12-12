import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
   const { name }=useParams();
   useEffect(()=>{
    const getData= async() =>{
        const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
        console.log(url)
        const response=await fetch(url)
        const data=await response.json()
        
         console.log(data)
     }
    getData()
},[])

    return (
      <>
        <h1>{name}</h1>
      </>
    );
  };
  export default PokemonDetail;