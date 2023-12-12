import { useEffect, useState } from "react";
import { Card, CardBody, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
   const { name }=useParams();
   const [pokemonDetail, setPokemoDetail]=useState({});
   useEffect(()=>{
    const getData= async() =>{
        const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
        console.log(url)
        const response=await fetch(url)
        const data=await response.json()
        
        let reducer=(accumulator, currentValue)=>({ totalAbilities: accumulator.totalAbilities + (accumulator.totalAbilities!="" ? ", " :" ") + currentValue.ability.name})
        const abilities=await data.abilities.reduce(reducer,{totalAbilities: ""});
        console.log(abilities)
        const detail={order:data.order,experience:data.base_experience,height:data.height,weight:data.weight,photo:data.sprites.other.dream_world.front_default, abilities:abilities.totalAbilities}
        setPokemoDetail(detail)
         
     }
    getData()
},[])

    return (
      <>
       
        <div className="flex-d main">
        <Card style={{ width: '30rem' }} className="flex-row">
            <Card.Img variant="top" src={pokemonDetail.photo} />
            <CardBody>
                <Card.Title>{name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>experience: {pokemonDetail.experience}</ListGroup.Item>
                    <ListGroup.Item>order: {pokemonDetail.order}</ListGroup.Item>
                    <ListGroup.Item>height: {pokemonDetail.height}</ListGroup.Item>
                    <ListGroup.Item>weight: {pokemonDetail.weight}</ListGroup.Item>
                    <ListGroup.Item>abilities: {pokemonDetail.abilities}</ListGroup.Item>
                </ListGroup>
            </CardBody>
             
         </Card>
        </div>
        

      </>
    );
  };
  export default PokemonDetail;