import "./UserInfo.css"
import photo from "./Assets/userPhoto.png"

export const UserInfo = props => {

    const {user} = props 

    return (
        <div className="userInfo">
            <img src={photo} alt=""/>
            <h4 className="userName">{`${user.first_name} ${user.last_name}`}</h4>
            <h6 className="userPosition">{user.position}</h6>
        </div>
    )
}