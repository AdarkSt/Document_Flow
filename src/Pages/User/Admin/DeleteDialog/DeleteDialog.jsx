import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'

import { Button } from '../../../../Components/Material/Inputs/Button'

export const DeleteDialog = props => {
    const {user, openBtn, acceptBtn, denyBtn, dialogTitle, handleAccept} = props

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormAccept = () => {
    handleAccept(user)
    handleClose()
  }
  
  return (
    <span>
      <Button className="btn btn-danger acceptCancelBtnsGroupe" title={openBtn} onClick={handleClickOpen}/>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle >{dialogTitle}</DialogTitle>
        <DialogActions>
          <Button className="btn btn-danger acceptCancelBtns" onClick={handleFormAccept} title={acceptBtn} />
          <Button className="btn btn-secondary acceptCancelBtns" onClick={handleClose} title={denyBtn}/>
        </DialogActions>
      </Dialog>
    </span>
  )
}