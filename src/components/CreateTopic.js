export default function CreateTopic() {
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
            type="number"
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

    </form>;
    );
}