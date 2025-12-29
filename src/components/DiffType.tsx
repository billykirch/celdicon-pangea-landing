import '../App.css'

type DiffTypeKind = '1' | '2' | '3';

type DiffInfo = {
    heading: string;
    description: string;
}

const INFO_MAP: Record<DiffTypeKind, DiffInfo> = {
    '1': { heading: 'Built as a smart second screen, not a passive display', description: 'Supports dual-screen workflows (main + companion screen), and enables persistent companion panels, controls, and overlays. Most displays show pixels, Pangea-SS participates in your workflow.'},
    '2': { heading: 'Glasses-free 3D, integrated into real everyday use', description: 'Supports immersive glasses-free 3D; lives inside a practical second-screen setup; can switch between 2D and 3D seamlessly.'},
    '3': { heading: 'Modular and future-proof, designed to evolve over time', description: 'With modular architecture, software-driven upgrades, and optional standalone capability, you are not buying a screen for this year, you are backing a platform that grows with you'}
};

function DiffType({type}: {type: DiffTypeKind}) {
    const { heading, description } = INFO_MAP[type];
    return (
        <div className="diff-type">
            <h3 className='badge'>{type}</h3>
            <div>
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DiffType;
