import '../App.css'

type ModeTypeKind = '1' | '2' | '3';

type ModeInfo = {
    heading: string;
    description: string;
}

const INFO_MAP: Record<ModeTypeKind, ModeInfo> = {
    '1': { heading: 'Regular display', description: 'Pangea-SS displays content to enhance your digital experience. It works as a premium second screen with built-in speakers, touchscreen support, improved image processing, and optional glasses-free 3D.'},
    '2': { heading: 'Smart display', description: 'Pangea-SS intelligently manages the second-screen experience, automatically adjusting screen profiles and settings, managing dual-screen layouts, while letting you interact through built-in physical controls and touch.'},
    '3': { heading: 'Supercharged', description: 'Pangea-SS operates all on its own, running emulators, creative tools, and retro games, functioning as a standalone, modular mini-computer with a premium display — designed for maximum flexibility and experimentation.'}
};

function ModeType({type}: {type: ModeTypeKind}) {
    const { heading, description } = INFO_MAP[type];
    return (
        <div className="flex-col">
            <h3 className='badge'>MODE {type}</h3>
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ModeType;
