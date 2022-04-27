import "./PdfComponent.css"
import {Button} from "../Material/Inputs/Button"
import PdfPng from "../../Assets/download.png"


export const PdfComponent = props => {
    const {file, title} = props
    
  return (
    <div className="downloaderContainer">
        <p className="downloaderText">{title}</p>
        <img className="downloaderImg" src={PdfPng} alt=""></img>
        <Button className="btn btn-primary " title={<a className="downloader" href={file} download>Բեռնել</a>} type="button"/>
    </div>
  );

}