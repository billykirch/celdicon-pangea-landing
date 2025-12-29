import '../App.css'
import CTAButtons from '../components/CTAButtons';

function CTA() {
    return (
        <div className="cta-container">
            <CTAButtons></CTAButtons>
            <h1 className='center-text'>Be the first to experience <span style={{ whiteSpace: 'nowrap' }}><b>Pangea-SS.</b></span></h1>
        </div>
    )
}

export default CTA;