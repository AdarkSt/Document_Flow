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

export const VacantionDialog = props => {

    const {initial_start_date, initial_end_date, initial_reason, initial_file, isDialog=true, openButtonName="Բացել"} = props

    const [open, setOpen] = useState(false)
    const [formValues, setFormValues] = useState({
      start_date: "",
      end_date: "",
      reason: "",
      file: ""
    })

    const error = {
      start_date: !formValues.start_date,
      end_date: !formValues.end_date,
      reason: !formValues.reason
    }

    const location = useLocation()
    const user = location.state

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
        start_date: formValues.start_date,
        endt_date: formValues.end_date,
        reason: formValues.reason,
        sender_id: user.id,
        step: 1,
        type: "VacantionDocument",
      }
      try{
        const response = await DocsService.createDocs(userDocument)
        toast.success("Հաջողությամբ կատարված է")
      } catch (error) {
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
            <DialogTitle id="scroll-dialog-title">Արձակուրդի տրամադրման դիմում</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <span>Խնդրում եմ ինձ տրամադրել արձակուրդ՝</span>
                {initial_start_date ? <span>{initial_start_date}</span> : <TextField
                    autoFocus
                    margin="dense"
                    id="start_date"
                    name="start_date"
                    type="date"
                    style={{width: "110px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    value={formValues.start_date}
                    onChange={handleChange}
                    error={error.start_date}
                /> }
                <span>-ից  մինչև </span>
                {initial_end_date ? <span>{initial_end_date}</span> : <TextField
                    autoFocus
                    margin="dense"
                    id="end_date"
                    name="end_date"
                    type="date"
                    style={{width: "110px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    value={formValues.end_date}
                    onChange={handleChange}
                    error={error.end_date}
                />}
                <p>Նշել պատճառը․</p>
                {initial_reason ? <span>{initial_reason}</span> : <TextField
                    autoFocus
                    margin="dense"
                    id="reason"
                    name="reason"
                    type="text"
                    style={{width: "550px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    value={formValues.reason}
                    onChange={handleChange}
                    error={error.reason}
                />}
                <span>Կից ներկայացնում եմ անհրաժեշտ փաստաթղթերը։ </span>
                {initial_file ? null : <TextField
                    autoFocus
                    margin="dense"
                    id="file"
                    name="file"
                    type="file"
                    style={{width: "100px", position: "relative", bottom: "11px"}}
                    variant="standard"
                    value={formValues.file}
                    onChange={handleChange}
                />}
              </DialogContentText>
            </DialogContent>
            {isDialog && <DialogActions>
              <Button onClick={handleSend}>Չեղարկել</Button>
              <Button disabled={error.start_date || error.end_date || error.reason} onClick={handleClose}>Ուղարկել</Button>
            </DialogActions>}
          </Dialog>
        </div>
      );
    
}