import docFlowLogo from "../../Assets/pageLogo.png"
import "./Header.css"

export const Header = props  => {
    return(
        <>
            <img className="headerImg" src={docFlowLogo} alt=""></img>
                <h2>DocFlow</h2>
        </>
    )
}