import { useState, useEffect, useRef } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'

export const SaleryInfoDialog = props => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
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
          <Button size="large" variant="text" onClick={handleClickOpen}>Բացել</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Աշխատավարձի մասին տեղեկանքի դիմում</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              > 
                <span>Խնդրում եմ ինձ տրամադրել աշխատավարձի վերաբերյալ տեղեկանք՝ </span>
                <TextField
                    autoFocus
                    margin="dense"
                    id="first_name"
                    name="first_name"
                    type="text"
                    style={{width: "100px", position: "relative", bottom: "11px"}}
                    variant="standard"
                />
                <span>ներկայացնելու համար։</span>
              </DialogContentText>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Չեղարկել</Button>
              <Button onClick={handleClose}>Ուղարկել</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}