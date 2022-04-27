import { useState } from 'react'

import { Button } from '../Inputs/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export const FormDialog = props => {

  const {openBtn, acceptBtn, denyBtn, dialogTitle, handleAccept, currentDocument, id} = props

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormAccept = () => {
    handleAccept(currentDocument, id, value)
    handleClose()
  }

  const handleChange = (event) => {
    const value = event.target.value
    setValue(value)
  }

  return (
    <span>
      <Button className="btn btn-danger acceptCancelBtns" title="Մերժել" onClick={handleClickOpen}>
        {openBtn}
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle >{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Ձեր նկարագրությունը"
            type="text"
            style={{width: "500px"}}
            multiline
            rows={5}
            variant="standard"
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button className="btn btn-danger acceptCancelBtns" disabled={!value} onClick={handleFormAccept} title={acceptBtn} />
          <Button className="btn btn-secondary acceptCancelBtns" onClick={handleClose} title={denyBtn}/>
        </DialogActions>
      </Dialog>
    </span>
  )
}