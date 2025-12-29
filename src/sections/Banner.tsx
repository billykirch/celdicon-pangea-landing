import '../App.css'
import Logo from '/celdicon-logo-orange.svg'
import Star from '/shooting-star-orange.svg'

function Banner() {
    return (
        <div className="banner-container">
            <img className="logo" src={Logo}></img>
            <h3 className='badge'>PANGEA-SS</h3>
            <img className="shooting-star" src={Star}></img>
        </div>
    )
}

export default Banner