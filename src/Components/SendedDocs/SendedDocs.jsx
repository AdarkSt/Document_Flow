import  Carousel  from "react-bootstrap/Carousel";

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import GetAppIcon from '@mui/icons-material/GetApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";

import image from "../../Assets/sendedDocument.png"
import { stepsLayoutCounter } from "../../Utils/appBasedUtils/stepsLayoutCounter";

import "./SendedDocs.css"


export const SendedDocs = props => {

    const { documents } = props

    if(!documents.length){
        return (
            <div className="noSendedDocsBlock">
                <img
                    className="noSendedDocsImg"
                    src={image}
                    alt=""
                />
                <h2 className="noSendedDocsMessage">Դուք տվյալ պահին չունեք ուղարկված փաստաթղթեր</h2>
            </div>
        )
    }
    
    return(
        <Carousel 
            className="myCarouselSend" 
            interval={null} 
            controls={true} 
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon myNextIcon" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon myPrevIcon" />}
        >
            {
                documents.map((currentDocument, index) => {
                    const {resaiver_first_name, resaiver_last_name, resaiver_position, document, step, accepted, description} = currentDocument
                    const steps = stepsLayoutCounter(accepted)
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
                            <h3>{`Հասցեատեր։ ${resaiver_first_name} ${resaiver_last_name}`}</h3>
                            <h5 className="myDescription">{`Պաշտոնը։ ${resaiver_position}`}</h5>
                            <a className="myHref" href={document} download>Բեռնել փաստաթուղթը <GetAppIcon/></a>
                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={step} alternativeLabel>
                                    {   
                                        steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))
                                    }
                                </Stepper>
                            </Box>
                            {description && 
                                <Accordion className="accordionSend" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="accordionSendHeader">Մերժման նկարագրությունը</Accordion.Header>
                                        <Accordion.Body>
                                            {description}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}
