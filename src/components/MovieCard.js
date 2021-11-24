import movieimg from "../assets/movietest.jpeg"
import { useState, useEffect } from "react"
import axios from "axios"
import netflix from "../assets/netflix.png";
import primevideo from "../assets/primevideo.png";
import disneyplus from "../assets/disneyplus.png";
import discord from "../assets/discord.png";
import zoom from "../assets/zoom.png";
import slack from "../assets/slack.png";

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





    return (
        <div>
            {sessions.map(sessionObj =>

                <div className="row hero-subtitle">
                    <div className="col-6 text-center mt-5">
                        <img className="img-fluid movie-img" src={movieimg} alt="movie" />
                        <h2 className="row-bottom-margin" style={{ paddingTop: "10px" }}>{sessionObj.tittle}</h2>
                        <h4>1982</h4>
                    </div>
                    <div className="col-6 mt-5">
                        <p className="row-bottom-margin">{sessionObj.date}</p>
                        <p className="row-bottom-margin">{checkStreaming(sessionObj.streaming)}</p>
                        <p>{checkVoip(sessionObj.voip)}</p>
                        <p style={{ color: "white" }}>{sessionObj.address} </p>
                        <button type="button" className="btn btn-outline-warning m-3">Edit</button>
                        <button type="button" className="btn btn-outline-warning">Delete</button>

                    </div>
                </div>
            )}
        </div>
    )
}