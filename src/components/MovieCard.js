import { useState, useEffect } from "react"
import axios from "axios"
import netflix from "../assets/netflix.png";
import primevideo from "../assets/primevideo.png";
import disneyplus from "../assets/disneyplus.png";
import discord from "../assets/discord.png";
import zoom from "../assets/zoom.png";
import slack from "../assets/slack.png";
import { Link } from "react-router-dom";

export default function MovieCard() {


    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        axios.get("https://ironrest.herokuapp.com/watchtogether").then(response => {
            setSessions([...response.data])
        }

        ).catch(err => console.log(err))
    }, [])



    function checkStreaming(streaming) {
        if (streaming === "Netflix") {
            return <img src={netflix} alt="netflix" className="logo-size" />
        }
        if (streaming === "Prime Video") {
            return <img src={primevideo} alt="primevideo" className="logo-size" />
        }
        if (streaming === "Disney Plus") {
            return <img src={disneyplus} alt="disneyplus" className="logo-size" />
        }
    }

    function checkVoip(voip) {
        if (voip === "Discord") {
            return <img src={discord} alt="discord" className="logo-size" />
        }
        if (voip === "Zoom") {
            return <img src={zoom} alt="zoom" className="logo-size" />
        }
        if (voip === "Slack") {
            return <img src={slack} alt="slack" className="logo-size" />
        }
    }

    async function handleDelete(id) {
        try {
            await axios.delete(`https://ironrest.herokuapp.com/watchtogether/${id}`);
            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    }




    return (
        <div>
            {sessions.map(sessionObj =>

                <div key={sessionObj._id} className="row hero-subtitle d-flex flex-row-reverse">
                    <div className="col-6 text-center mt-5">
                        <img className="img-fluid movie-img mt-3" src={`https://image.tmdb.org/t/p/w500/${sessionObj.movie?.poster_path}`} alt="movie" />

                    </div>
                    <div className="col-6 mt-5 p-2">
                        <h3 className="row-bottom-margin" style={{ paddingTop: "10px" }}>{sessionObj.movie?.title}</h3>
                        <p className="row-bottom-margin">{(sessionObj.date).replace("T", " ")}</p>
                        <p className="mt-3">{checkStreaming(sessionObj.streaming)}</p>
                        <a rel="noreferrer" className="fab fa-instagram"
                            target="_blank" href={sessionObj.address} ><p className="mt-3">{checkVoip(sessionObj.voip)}</p></a>
                        <div className="d-flex justify-content-around">
                            <Link to={`/editsession/${sessionObj._id}`}><button type="button" className="btn btn-warning">Edit</button></Link>
                            <button type="button" className="btn btn-warning" onClick={() => { handleDelete(sessionObj._id) }}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}