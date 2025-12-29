import '../App.css'
import DiffType from '../components/DiffType'

function Differentiators() {
    return (
        <div className="diffs-container">
            <h2 className='center-text'>How is <span style={{ whiteSpace: 'nowrap' }}>Pangea-SS</span> <b>different</b>?</h2>
            <div className='diff-types-container'>
                <DiffType type='1'></DiffType>
                <DiffType type='2'></DiffType>
                <DiffType type='3'></DiffType>
            </div>
        </div>
    )
}

export default Differentiators;