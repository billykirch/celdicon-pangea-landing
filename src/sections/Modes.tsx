import '../App.css'
import ModeType from '../components/ModeType'

function Modes() {
    return (
        <div className="modes-container">
            <h2>How can you use the Pangea-SS?</h2>
            <div className='mode-types-container'>
                <ModeType type='1'></ModeType>
                <ModeType type='2'></ModeType>
                <ModeType type='3'></ModeType>
            </div>
        </div>
    )
}

export default Modes;