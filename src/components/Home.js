import AddButton from "./AddButton";
import MovieCard from "./MovieCard";
import Hero from "./Hero"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="d-flex justify-content-center mt-5">
                <AddButton />
            </div>
            <div className="row" style={{ margin: "20px" }}>
                <MovieCard />
            </div>
        </>
    )
}

