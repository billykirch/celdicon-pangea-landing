import '../App.css'
import Creating from '/creator-icon.svg'
import Gaming from '/gamer-icon.svg'
import Working from '/professional-icon.svg'

type UserTypeKind = 'Creating' | 'Gaming' | 'Working';

const ICON_MAP: Record<UserTypeKind, string> = {
  Creating,
  Gaming,
  Working,
};

function UserType({type}: {type: UserTypeKind}) {
    return (
        <div className="user-type">
            <img src={ICON_MAP[type]} alt={type}></img>
            <h3>{type}</h3>
        </div>
    )
}

export default UserType;
