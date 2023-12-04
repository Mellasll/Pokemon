import { Modal } from "react-bootstrap";
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function PokemonModal({show,close,data}){
    
    return(
        <Modal className="custom-modal" show={show} onHide={close} size="lg" >
         <Modal.Header closeButton className="custom-modalheader" >
            <h1>{data.name}</h1>
         </Modal.Header>
         <Modal.Body className="custom-modalbody">
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="base-statpoke">
                            {data?.stats.map((data) => {
                                return (
                                    <>
                                        <h5>{data.stat.name}</h5>
                                        <div style={{width:"70%"}} className="prog">
                                        <ProgressBar  animated max={100} variant="danger"  active="true"  now={data.base_stat} label={`${data.base_stat}%`} />
                                        </div>
                                        <br></br>
                                    
                                    </>
                                )
                            })}
                        </div>
         </Modal.Body>
        </Modal>
        
    )
}

export default PokemonModal