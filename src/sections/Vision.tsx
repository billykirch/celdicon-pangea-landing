import '../App.css'

function Vision() {
    return (
        <div className="vision-container">
            <div className="vision-header">
                <h2><b>Our Vision</b></h2>
                <img className="black-star" src='/shooting-star-black.svg'></img> {/* flip star? */}
            </div>
            <h3>Simply put, modern devices deserve better screens.</h3>
            <p>
                We started Celdicon after getting tired of disposable, inflexible external displays that didn’t fit how we actually work or play.
            </p>
            <p>
                Pangea-SS is our answer: a flexible, high-quality second screen, and the first step toward a modular display platform that grows with how people actually use their devices.
            </p>
        </div>
    )
}

export default Vision;