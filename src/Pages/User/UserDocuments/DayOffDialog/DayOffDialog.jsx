import { useState, useEffect, useRef } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { toBase64 } from '../../../../Utils/globalUtils/readFile'
import { useLocation } from 'react-router-dom'
import DocsService from '../../../../Services/docsService'
import { toast } from 'react-toastify'

export const DayOffDialog = props => {

    const {initial_date, initial_reason, initial_file, isDialog=true, openButtonName="Բացել"} = props

    const location = useLocation()
    const user = location.state

    const [open, setOpen] = useState(false)
    const [formValues, setFormValues] = useState({
      date: "",
      reason: "",
      file: ""
    })
    const error = {
      date: !formValues.date,
      reason: !formValues.reason
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = async (event) => {
      const fieldName = event.target.name;
      if (fieldName !== "file") {
        const fieldValue = event.target.value
        setFormValues(prevState => ({...prevState, [fieldName]:fieldValue}))
      } else {
        const fieldValue = await toBase64(event.target.fiels[0])
        setFormValues(prevState => ({...prevState, [fieldName]:fieldValue}))
      }
    }

    const handleSend = async () => {
      const userDocument = {
        sender_email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        position: user.position,
        date: formValues.date,
        reason: formValues.reason,
        sender_id: user.id,
        step: 1,
        type: "dayOffDocument",
      } 
      try{
        DocsService.createDocs(userDocument)
        toast.success("Հաջողությամբ կատարված է")
      }
      catch (error) {
        toast.error("Գործողությունը խափանված է")
      }
      handleClose()
    }

    const descriptionElementRef = useRef(null);
    useEffect(() => {
    if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
        descriptionElement.focus();
        }
    }
    }, [open]);

    return (
        <div>
          <Button size="large" variant="text" onClick={handleClickOpen}>{openButtonName}</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Աշխատանքից բացակայության դիմում</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <span>Տեղեկացնում եմ, որ </span>
                {initial_date ? <span>{initial_date}</span> : <TextField
                    autoFocus
                    margin="dense"
                    id="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleChange}
                    type="date"
                    style={{width: "120px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    error={error.date}
                /> }
                <span>-ին հարգելի պատճառով չեմ կարող ներկայանալ աշխատանքի։ </span>
                <br></br>
                <br></br>
                <p>Նշել պատճառը․</p>
                {initial_reason ? <span>{initial_reason}</span> : <TextField
                    autoFocus
                    margin="dense"
                    id="reason"
                    name="reason"
                    value={formValues.reason}
                    onChange={handleChange}
                    type="text"
                    style={{width: "550px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    error={error.reason}
                />}
                <br></br>
                <br></br>
                <span> Կից ներկայացնում եմ անհրաժեշտ փաստաթղթերը։  </span>
                {initial_file ? null : <TextField
                    autoFocus
                    margin="dense"
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleChange}
                    style={{width: "100px", position: "relative", bottom: "11px"}}
                    variant="standard"
                />}
              </DialogContentText>
              
            </DialogContent>
            {isDialog && <DialogActions>
              <Button onClick={handleClose}>Չեղարկել</Button>
              <Button disabled={error.date || error.reason} onClick={handleSend}>Ուղարկել</Button>
            </DialogActions>}
          </Dialog>
        </div>
      );
}