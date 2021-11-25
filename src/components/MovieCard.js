import movieimg from "../assets/movietest.jpeg"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export default function MovieCard() {


    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        axios.get("https://ironrest.herokuapp.com/watchtogether").then(response => {
            setSessions([...response.data])
        }

        ).catch(err => console.log(err))
    }, [])
    
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
                        <p className="row-bottom-margin">{sessionObj.streaming}</p>
                        <p>{sessionObj.voip}: nPmnW/Yo</p>
                        <Link to={`/editsession/${sessionObj._id}`}><button type="button" className="btn btn-outline-warning">Edit</button></Link>

                    </div>
                </div>
            )}
        </div>
    )
}