import Carousel from "react-bootstrap/Carousel"
import GetAppIcon from '@mui/icons-material/GetApp'
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

import image from "../../Assets/document.png"

import "./ResavedDocs.css"
import { Button } from "../Material/Inputs/Button/Button"
import { FormDialog } from "../Material/FormDialog/FormDialog";
import { useLocation } from "react-router-dom";


export const ResavedDocs = props => {
    
    const { handleAccept, handleCancel } = props 
    let {documents} = props
    const location = useLocation()
    const globalUser = location.state

    documents = documents.filter(document => document.step !== 3)

    if(!documents.length){
        return (
            <div className="noResavedDocsBlock">
                <img
                    className="noResavedDocsImg"
                    src={image}
                    alt=""
                />
                <h2 className="noResavedDocsMessage">Դուք տվյալ պահին չունեք ձեզ հասցեագրված փաստաթղթեր</h2>
            </div>
        )
    }

    const onCancel = (currentDocument, id, value) => {
        handleCancel({...currentDocument, description:value}, id)
    }
    
    return (
        <>
            <Carousel 
                className="myCarousel" 
                interval={null} 
                controls={true} 
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon myNextIcon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon myPrevIcon" />}
            >
                {
                    documents.map((currentDocument, index) => {
                        const {first_name, last_name, position, document, id} = currentDocument
                        return (
                            <Carousel.Item key={index} className="myItem">
                                <img
                                className="carouselImage"
                                src={image}
                                alt={index}
                                />

                                <Carousel.Caption
                                    className="myCaption"
                                >
                                <h3>{`Ուղարկող։ ${first_name} ${last_name}`}</h3>
                                <h5 className="myDescription">{`Պաշտոն։ ${position}`}</h5>
                                <a className="myHref" href={document} download>Բեռնել փաստաթուղթը <GetAppIcon/> </a>
                                {globalUser.role === "admin" && 
                                    <div className="btnsGroupe">
                                        <Button onClick={()=> handleAccept(currentDocument, id)} className="btn btn-success acceptCancelBtns" title="Հաստատել"/>
                                        <FormDialog openBtn="Մերժել" acceptBtn="Մերժել" currentDocument={currentDocument} id={id} handleAccept={onCancel} denyBtn="Չեղարկել" dialogTitle="Մերժման պատճառը"/>
                                    </div>
                                }
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </>
        
    )
}