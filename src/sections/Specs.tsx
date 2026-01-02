import '../App.css'
import BlackBack from '/black-chassis-back-45.png'
import BlackFront from '/black-chassis-front-45.png'
import ClearFront from '/clear-chassis-front.png'
import ClearBack from '/clear-chassis-back.png'



function Specs() {
    return (
        <div className="specs-container">
            <h1 className='center-text'>PANGEA-SS is a <b>modular, glasses-free 3D display</b></h1>
            <p className="center-text">
                <b>Thoughtfully</b> designed to work as your <b>premium second screen</b>,
                with intelligent companion features <b>built to grow</b>.
            </p>
            <div className="specs-images">
                <div className="flex-col" style={{gap: '2.625rem'}}> {/* manual style adjustment for better image composition*/}
                    <img className="spec-img" src={ClearFront}></img>
                    <img className="spec-img" src={ClearBack}></img>
                </div>
                <div className="flex-col">
                    <img className="spec-img" src={BlackFront}></img>
                    <img className="spec-img" src={BlackBack}></img>
                </div>
            </div>
            <div>
                <h1 className='center-text'><b>Other specs</b> include:</h1>
                <ul>
                    <li>Up to 4K display</li>
                    <li>120Hz-165Hz visuals + VRR</li>
                    <li>Dual stereo speakers</li>
                    <li>USB-C and HDMI connectivity</li>
                    <li>Micro-SD storage expansion</li>
                </ul>
            </div>
        </div>
    )
}

export default Specs