import '../App.css'
import UserType from '../components/UserType'

function Users() {
    return (
        <div className="users-container">
            <h2 className='center-text'>Your <b>superior companion</b> for</h2>
            <div className='user-type-container'>
                <UserType type='Creating'></UserType>
                <UserType type='Gaming'></UserType>
                <UserType type='Working'></UserType>
            </div>
        </div>
    )
}

export default Users;