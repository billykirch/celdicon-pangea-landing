import '../App.css'
import Spec from '/hero-spec.png'
import CTAButtons from '../components/CTAButtons'

function Hero() {
    return (
        <div className="hero-container">
            <img className="hero-spec" src={Spec}></img>
            <div className="flex-col">
                {/* phase out <b> and <br/> tags later... */}
                <h1>One display.<br/><b>Infinite configurations.</b></h1>
                <p>
                    Celdicon Animation introduces a
                    <b> next-generation modular, intelligent,
                     glasses-free 3D secondary display</b>, 
                     adapting to how you work, play, and create.
                </p>
                <CTAButtons></CTAButtons>
            </div>
        </div>
    )
}

export default Hero