import docDownloader from "../../Assets/docDownloader.png"
import "./CustomCard.css"

export const CardImage = props => {
    return (
        <span className="CardSpan">
            <img
            src={docDownloader}
            alt=""
            className="CardImage"
            />
        </span>
        
    )

}