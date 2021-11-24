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
            <div className="row" style={{ margin: "5px" }}>
                <div className="col-6 mt-5" style={{ color: "white" }}>
                    <MovieCard />
                </div>
                <div className="col-6 mt-5" style={{ color: "white" }}>
                    <MovieCard />
                </div>  

            </div>
        </>
    )
}

