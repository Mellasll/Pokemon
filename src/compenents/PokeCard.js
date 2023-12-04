import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiShowAlt } from "react-icons/bi";
import PokemonModal from "../modal/Pokemodal";

export default function PokeCard({ data, infoPokemon }) {

    const [pokemon, setPokemon] = useState()
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios.get(data.url).then((res) => {
            setPokemon(res.data)
        })
    }, [data.url])

    const handleClose = () => {
        setOpenModal(false)
    }

    return <>
        {
            pokemon && <div className="card-custom" key={pokemon.id} >
                <h2> {data.url.split('/').filter(Boolean).pop()} </h2>
                <h2 onClick={() => infoPokemon(pokemon)}> {data.name} </h2>
                <img src={pokemon.sprites.front_default} alt="" />
                <Button variant="outline-secondary" onClick={()=>setOpenModal(true)}> <BiShowAlt /> </Button>  
                { openModal ? <PokemonModal show={openModal} close={handleClose} data={pokemon}/> : null }          
            </div>
        }

    </>


}