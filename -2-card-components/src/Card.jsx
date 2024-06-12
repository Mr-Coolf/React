import pythorasPic from './assets/pythagoras.jpg'

function Card() {
    return(
        <div className="card">
            <img src={pythorasPic} alt="Pythagoras" width={250} className='card-image'></img>
            <h2 className='card-title'>Pythagoras</h2>
            <p className='card-text'>I am an ancient Greek mathematician.<br/>I'm famous for making the Pythagorean theorem.</p>
        </div>
    );
}

export default Card