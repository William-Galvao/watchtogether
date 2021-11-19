import movieimg from "../assets/movietest.jpeg"

export default function MovieCard() {
    return (
        <div className="row">
            <div className="col-6">
                <img className="img-fluid movie-img" src={movieimg} alt="movie" />
                <p className="row-bottom-margin">Sophie's Choice</p>
                <p>1982</p>
            </div>
            <div className="col-6">
                <p className="row-bottom-margin">20/11 20h</p>
                <p className="row-bottom-margin">Telecine Premium</p>
                <p>Discord: nPmnW/Yo</p>
                <button type="button" class="btn btn-secondary">Edit</button>

            </div>
        </div>
    )
}