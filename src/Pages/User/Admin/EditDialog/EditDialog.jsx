import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import _isEqual from "lodash/isEqual"

import { Button } from '../../../../Components/Material/Inputs/Button'

export const EditDialog = props => {
  const {user, openBtn, acceptBtn, denyBtn, dialogTitle, handleAccept} = props

  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState(user)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormAccept = () => {
    handleAccept(formValue)
    handleClose()
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setFormValue(prevValue => ({...prevValue, [name]:value}))
  }

  return (
    <span>
      <Button className="btn btn-success acceptCancelBtnsGroupe" title={openBtn} onClick={handleClickOpen}/>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle >{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="first_name"
            name='first_name'
            label="Անուն"
            type="text"
            style={{width: "500px"}}
            variant="standard"
            value={formValue.first_name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="last_name"
            name='last_name'
            label="Ազգնուն"
            type="text"
            style={{width: "500px"}}
            variant="standard"
            value={formValue.last_name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="position"
            name='position'
            label="Բաժին"
            type="text"
            style={{width: "500px"}}
            variant="standard"
            value={formValue.position}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button className="btn btn-success acceptCancelBtns" disabled={!!_isEqual(user, formValue)} onClick={handleFormAccept} title={acceptBtn} />
          <Button className="btn btn-secondary acceptCancelBtns" onClick={handleClose} title={denyBtn}/>
        </DialogActions>
      </Dialog>
    </span>
  )
}