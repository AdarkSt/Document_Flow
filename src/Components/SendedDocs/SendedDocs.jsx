import  Carousel  from "react-bootstrap/Carousel";

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PreviewIcon from '@mui/icons-material/Preview';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";

import image from "../../Assets/sendedDocument.png"
import { stepsLayoutCounter } from "../../Utils/appBasedUtils/stepsLayoutCounter";
import { getDocumentNameFromType } from "../../Utils/appBasedUtils/getDocumentNameFromType"
import { getAccepterInfo } from "../../Utils/appBasedUtils/getAccepterInfo";

import "./SendedDocs.css"
import { ConditionalRenderDocuments } from "../../Pages/User/UserDocuments/ConditionalRenderDocuments/ConditionalRenderDocuments";


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
                    const {accepted, denied, seenStep, step, description, type, accepters} = currentDocument
                    console.log("seenStep",seenStep)
                    const docName = getDocumentNameFromType(type)
                    const acceptersInfo = getAccepterInfo(accepters, currentDocument)
                    const steps = stepsLayoutCounter(accepted, denied)

                    return (
                        <Carousel.Item key={index} className="myItem">
                            <img
                                className="carouselImage"
                                src={image}
                                alt={index}
                            />
                            <Carousel.Caption className="myCaption" >
                                <h3>{docName}</h3>
                                <ConditionalRenderDocuments document={currentDocument}/>
                                <Carousel
                                    className="myCarouselAcceptersInfo"
                                    interval={null}  
                                    defaultActiveIndex={seenStep > 1 ? seenStep-2 : seenStep-1}
                                    indicators={false}
                                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon myAcceptersInfoNextIcon" />}
                                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon myAcceptersInfoPrevIcon" />}
                                >
                                    {acceptersInfo.map((accepter, index) => {
                                        return(
                                            <Carousel.Item key={index} className="myAcceptersInfoItem">
                                                <Carousel.Caption className="myAcceptersInfoCaption">
                                                    <Card sx={{ minWidth: 400, maxWidth: 400, textAlign: "start"}}>
                                                        <CardContent >
                                                            <Typography sx={{ fontSize: 16, maxWidth: "450px" }} color="InfoText" gutterBottom>
                                                                Ում մոտ է գտնվում։ {index+1}. <span style={{color: "violet"}}>{accepter.accepter_position}</span>
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 16, maxWidth: "170px" }} color="InfoText" gutterBottom>
                                                                Դիտված <PreviewIcon/>։ {accepter.accepter_seen ? <CheckIcon color="success"/> : <CloseIcon color="error"/>}
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 16, maxWidth: "170px" }} color="InfoText" gutterBottom>
                                                                Հաստատված <DriveFileRenameOutlineIcon/>։ {accepter.accepter_answer ? <CheckIcon color="success"/> : <CloseIcon color="error"/>}
                                                            </Typography>
                                                            {(description && accepter.accepter_seen && !accepter.accepter_answer) && 
                                                                <Accordion className="accordionSend" defaultActiveKey="0">
                                                                    <Accordion.Item eventKey="0">
                                                                        <Accordion.Header className="accordionSendHeader">Մերժման նկարագրությունը</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            {description}
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            }
                                                        </CardContent>
                                                    </Card>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                                <Box sx={{ width: '100%', marginTop: '-10px'}}>
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
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}
