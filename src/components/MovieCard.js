import movieimg from "../assets/movietest.jpeg"
import { useState, useEffect } from "react"
import axios from "axios"

export default function MovieCard() {

    // ESTRUTURA PRONTA PARA RECEBER OS DADOS DA API DE SESSIONS E FAZER O MAP NO RETURN PARA PREENCHER A HOME.
    // const [sessions, setSessions] = useState([]);

    // useEffect (() => {
    //     axios.get("").then(response => {
    //         setSessions([...response.data])
    //     }

    //     ).catch(err => console.log(err))
    // }, [])



    // ESTRUTURA DO MAP PARA RETORNAR A LISTA DE SESSÕES NA HOME.
    // {sessions.map(currentSessionObj => 
    //     <div className="col-6 text-center">
    //             <img className="img-fluid movie-img" src= VEM DA API EXT alt=´${currentSessionObj.name}´ />
    //             <h2 className="row-bottom-margin" style={{ paddingTop: "10px" }}>{currentSessionObj.name}}</h2>
    //             <h4> VEM DA API EXT </h4>
    //         </div>
    //         <div className="col-6">
    //             <p className="row-bottom-margin">{currentSessionObj.date}}</p>
    //             <p className="row-bottom-margin">{currentSessionObj.streaming}</p>
    //             <p>{currentSessionObj.voip}}</p>
    //             <button type="button" className="btn btn-secondary">Edit</button>

    //         </div>

    //     )}




    return (
        <div className="row">
            <div className="col-6 text-center">
                <img className="img-fluid movie-img" src={movieimg} alt="movie" />
                <h2 className="row-bottom-margin" style={{ paddingTop: "10px" }}>Sophie's Choice</h2>
                <h4>1982</h4>
            </div>
            <div className="col-6">
                <p className="row-bottom-margin">20/11 20h</p>
                <p className="row-bottom-margin">Telecine Premium</p>
                <p>Discord: nPmnW/Yo</p>
                <button type="button" className="btn btn-secondary">Edit</button>

            </div>
        </div>
    )
}