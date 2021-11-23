import ReactPlayer from 'react-player';
import heroVideo from '../assets/cinema-hero.mp4'


export default function Hero() {
    return <section className="hero">
        <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="202px"
        />
        <div className="overlay hero-text">
            <h1 className="hero-title">Watch Together</h1>
            <p className="row-bottom-margin hero-subtitle">A simple way to watch movies</p>
            <p className="row-bottom-margin hero-subtitle">with whoever you like</p>
        </div>

    </section>
}