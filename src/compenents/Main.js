import React, { useEffect, useState } from "react";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import PokeCard from "./PokeCard";

const Main = () => {
    const [pokeData, setPokeData] = useState([])
    const [, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [prevUrl, setPrevUrl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        setPokeData(res.data.results);
        setLoading(false)
    }

    useEffect(() => {
        pokeFun();
        //eslint-disable-next-line
    }, [url])


    const firstPoke = pokeData[0]

    return (
        <>
       
        <div className="containermls">
                <div className="left-content-mls">
                    { 
                        pokeData.sort().map((pokemon) => {
                            return <div>                           
                              <PokeCard data={pokemon} infoPokemon={poke => setPokeDex(poke)} />
                            </div>

                        })
                    }
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>

                <div className="right-content-mls">

                    <Pokeinfo pokemon={firstPoke} pokedex={pokeDex} data={pokeData} />

                </div>
        </div>
        </>
    )
}

export default Main;


