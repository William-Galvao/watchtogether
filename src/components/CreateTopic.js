import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateTopic() {
    const navigate = useNavigate();
    const [topic, setTopic] = useState({
        title: "",
        data: "",
        video: "",
        audio: "",
    });

    function handleChange(event) {

        setTopic({
            ...topic,
            [event.target.name] : event.target.value,
        });

    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await axios.post("https://ironrest.herokuapp.com/watchtogether", topic);
            navigate("/");
        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
    <form>
        <label htmlFor="title">Titulo:</label>
        <input 
            id="title" 
            value={topic.title} 
            type="text" 
            onChange={handleChange} 
            name="title" />

        <label htmlFor="data">Data:</label>
        <input 
            id="data"
            value={topic.data}
            type="date"
            onChange={handleChange}
            name="data" />

        <label htmlFor="video">Streaming:</label>
        <input 
            id="video" 
            value={topic.video}
            type="video"
            onChange={handleChange}
            name="video" />

        <label htmlFor="audio">Voip:</label>
        <input 
            id="audio" 
            value={topic.audio}
            type="audio"
            onChange={handleChange}
            name="audio" />
        
    </form>
    );
}