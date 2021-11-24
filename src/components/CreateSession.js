import { useState, useNavigate } from "react";
import axios from "axios";


export default function CreateSession() {

    const navigate = useNavigate();
    const [session, setSession] = useState({
        title: "",
        date: "",
        streaming: "",
        voip: "",

    })

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
        <form>

            <label htmlFor="tittle">
                Tittle:
            </label>
            <input
                id="tittle"
                value={session.title}
                type="text"
                onChange={handleChange}
                name="tittle"
            />

            <label htmlFor="date">
                Date:
            </label>
            <input
                id="date"
                value={session.date}
                type="date"
                onChange={handleChange}
                name="date"
            />

            <label htmlFor="streaming">
                Streaming:
            </label>
            <input
                id="streaming"
                value={session.streaming}
                type="text"
                onChange={handleChange}
                name="streaming"
            />

            <label htmlFor="voip">
                Voip:
            </label>
            <input
                id="voip"
                value={session.voip}
                type="text"
                onChange={handleChange}
                name="voip"
            />

            <button
                type="submit"
                onClick={handleSubmit}
            >
                Create your session!
            </button>


        </form>

    )
}