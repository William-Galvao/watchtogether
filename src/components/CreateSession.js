import netflix from "../assets/netflix.png";
import primevideo from "../assets/primevideo.png";
import disneyplus from "../assets/disneyplus.png";
import discord from "../assets/discord.png";
import zoom from "../assets/zoom.png";
import slack from "../assets/slack.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AsyncSelect from 'react-select/async';

const apiKey = process.env.REACT_APP_API;
const fetchMoviesOpt = async (inputValue) => {
    if (!inputValue) return;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}`);
    const movies = (await response.json()).results
    return movies.map(movie => ({ label: movie.title, value: movie }));

}

export default function CreateSession() {


    const navigate = useNavigate();

    const [session, setSession] = useState({
        date: "",
        streaming: "",
        voip: "",
        address: "",
        movie: null,

    })


    function handleChange(e) {
        setSession(
            {
                ...session, [e.target.name]: e.target.value || e.target.checked
            }
        )
    }

    function handleMovieSelect(selectedMovie) {
        setSession(
            {
                ...session, movie: selectedMovie.value
            }

        )
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post("https://ironrest.herokuapp.com/watchtogether", session);
            navigate("/");

        } catch (error) {
            console.error(error.response.data);
        }
    }


    return (
        <form className="div-adjust">

            <div className="form-group row">
                <label htmlFor="tittle" className="col-sm-2 col-form-label hero-subtitle">Tittle</label>
                <div className="col-sm-10">
                    <AsyncSelect cacheOptions defaultOptions onChange={handleMovieSelect} loadOptions={fetchMoviesOpt} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="date" className="col-sm-2 col-form-label hero-subtitle">Date</label>
                <div className="col-sm-10">
                    <input type="datetime-local" id="date" value={session.date} name="date" onChange={handleChange} />
                </div>
            </div>

            <fieldset className="form-group mt-3" />
            <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 hero-subtitle">Streaming</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming1" onChange={handleChange} value="Netflix" checked={session.streaming === "Netflix"} />
                        <label className="form-check-label hero-subtitle m-3" htmlFor="streaming1">
                            <img src={netflix} alt="netflix" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming2" onChange={handleChange} value="Prime Video" checked={session.streaming === "Prime Video"} />
                        <label className="form-check-label hero-subtitle m-3" htmlFor="streaming2">
                            <img src={primevideo} alt="primevideo" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming3" onChange={handleChange} value="Disney Plus" checked={session.streaming === "Disney Plus"} />
                        <label className="form-check-label hero-subtitle m-3" htmlFor="streaming3">
                            <img src={disneyplus} alt="disneyplus" className="logo-size" />
                        </label>
                    </div>
                </div>
            </div>


            <fieldset className="form-group" />
            <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 hero-subtitle">Voip</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="voip" id="voip1" onChange={handleChange} value="Discord" checked={session.voip === "Discord"} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip1">
                            <img src={discord} alt="discord" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="voip" id="voip2" onChange={handleChange} value="Zoom" checked={session.voip === "Zoom"} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip2">
                            <img src={zoom} alt="zoom" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="voip" id="voip3" onChange={handleChange} value="Slack" checked={session.voip === "Slack"} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip3">
                            <img src={slack} alt="slack" className="logo-size" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="address" className="col-sm-2 col-form-label hero-subtitle">Voip Address</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="https://" id="address" value={session.address} name="address" onChange={handleChange} />
                </div>
            </div>
            <div className="d-flex flex-row-reverse mt-3">
                <button type="submit" className="btn btn-warning p-2" onClick={handleSubmit}>
                    Create your session!
                </button>
            </div>



        </form>

    )
}