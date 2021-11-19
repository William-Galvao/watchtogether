import AddButton from "./AddButton";
import MovieCard from "./MovieCard";

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <h1 className="display-2" style={{ color: "white" }}>Watch Together</h1>
                    <hr />
                    <p style={{ color: "#E6E100" }}>A simple way to gather your friends and watch a good movie!</p>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <AddButton />
            </div>
            <div className="row">
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

