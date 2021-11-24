import netflix from "../assets/netflix.png";
import primevideo from "../assets/primevideo.png";
import disneyplus from "../assets/disneyplus.png";
import discord from "../assets/discord.png";
import zoom from "../assets/zoom.png";
import slack from "../assets/slack.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function EditSession() {

    const params = useParams();

    const navigate = useNavigate();

    const [session, setSession] = useState({
        tittle: "",
        date: "",
        streaming: "",
        voip: "",

    })

    useEffect(() => {
        async function fetchSession() {
            try{
                const response = await axios.get(`https://ironrest.herokuapp.com/watchtogether/${params.id}`);
                setSession({...response.data})
            }catch(err) {
                console.error(err);
            }
        }
        fetchSession() 

        
    }, [params.id]) 

    function handleChange(e) {
        setSession(
            {
                ...session, [e.target.name]: e.target.value,
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
                    <input type="text" id="tittle" value={session.tittle} name="tittle" onChange={handleChange} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="date" className="col-sm-2 col-form-label hero-subtitle">Date</label>
                <div className="col-sm-10">
                    <input type="datetime-local" id="date" value={session.date} name="date" onChange={handleChange} />
                </div>
            </div>

            <fieldset className="form-group" />
            <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 hero-subtitle">Streaming</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming1" onChange={handleChange} value={session.streaming} />
                        <label className="form-check-label hero-subtitle m-3" htmlFor="streaming1">
                            <img src={netflix} alt="netflix" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming2" onChange={handleChange} value={session.streaming} />
                        <label className="form-check-label hero-subtitle m-3" htmlFor="streaming2">
                            <img src={primevideo} alt="primevideo" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="streaming" id="streaming3" onChange={handleChange} value={session.streaming} />
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
                        <input className="form-check-input" type="radio" name="voip" id="voip1" onChange={handleChange} value={session.voip} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip1">
                            <img src={discord} alt="discord" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="voip" id="voip2" onChange={handleChange} value={session.voip} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip2">
                            <img src={zoom} alt="zoom" className="logo-size" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="voip" id="voip3" onChange={handleChange} value={session.voip} />
                        <label className="form-check-label hero-subtitle" htmlFor="voip3">
                            <img src={slack} alt="slack" className="logo-size" />
                        </label>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-outline-warning" onClick={handleSubmit}>
                Create your session!
            </button>



        </form>

    )
}