import '../App.css'
import Logo from '/celdicon-logo-black.svg'

function Footer() {
    return (
        <div className="footer">
            <img className="logo" src={Logo}></img>
            <p style={{color: "var(--color-terciary)"}}>© Celdicon Animations LLC </p>
        </div>
    )
}

export default Footer