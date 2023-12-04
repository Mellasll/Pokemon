import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiShowAlt } from "react-icons/bi";
import PokemonModal from "../modal/Pokemodal";

const Pokeinfo = ({ pokedex, pokemon ,data}) => {
console.log(pokedex);
    const [firstPoke, setFirstPoke] = useState();
    const [openModal, setOpenModal] = useState(false)

    const url = data[0] && data[0].url

    useEffect(() => {
        if (url) {
            axios.get(url).then((res) => setFirstPoke(res.data))
        }
    }, [url])

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <>
        {
        (!pokedex && data.length > 0) &&   (
                    <>
                    <Button className="rightshow" variant="secondary" onClick={() => setOpenModal(true)}> <BiShowAlt /> </Button>
                    {openModal ? <PokemonModal show={openModal} close={handleClose} data={firstPoke} /> : null}
                        <h1> {data[0].name} </h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`} alt="" />
                        <div className="abilitiespoke">
                          <div>
                            {
                                firstPoke?.abilities.map(pokemon => {
                                    return (
                                        <>
                                            <div className="grouppoke" key={pokemon.ability.name}>
                                                <h2>{pokemon.ability.name}</h2>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
       
                    </>
                )
                        }
            {
                (!pokedex) ? "" : (
                    <>
                     <Button className="rightshow" variant="secondary" onClick={() => setOpenModal(true)}> <BiShowAlt /> </Button>
                    {openModal ? <PokemonModal show={openModal} close={handleClose} data={pokedex} /> : null}
                        <h1>{pokedex.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedex.id}.svg`} alt="" />
                        <div className="abilitiespoke">
                            <div>
                                {
                                    pokedex.abilities.map(pokemon => {
                                        return (
                                            <div className="grouppoke" key={pokemon.ability.name}>
                                                <h2>{pokemon.ability.name}</h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                       
                       
                    </>
                )
            }
        </>
    )
}

export default Pokeinfo;