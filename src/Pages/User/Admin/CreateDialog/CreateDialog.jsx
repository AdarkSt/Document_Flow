import { useState } from 'react'

import { Button } from '../../../../Components/Material/Inputs/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Checkbox } from '@mui/material'
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { validateCreateDialog } from './Utils/validateCreateDialog'
import { isEqual } from "lodash"

export const CreateDialog = props => {
    const {openBtn, acceptBtn, denyBtn, dialogTitle, handleAccept} = props

    const [open, setOpen] = useState(false);
    const initialValues = {
      first_name:"",
      last_name:"",
      position:"",
      role: "user",
      email: "",
      password: "",
    }
    const [values, setValues] = useState(initialValues)
    const [chacked, setChecked] = useState(false)

    const error = validateCreateDialog(values)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFormAccept = () => {
      if(
          isEqual(error, {
            first_name: {required: ""},
            last_name: {required: ""},
            email: {required: "", invalid:""},
            position: {required: ""},
            password: {required: "", invalid:""},
          })
      ){
        let role
        chacked ? role="admin" : role="user"
        const createdUser = {...values, id: Math.random().toFixed(10)*10000000000, role:role}
        handleAccept(createdUser)
        handleClose()
        setValues(initialValues)
      }
    }
  
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      
      setValues(prevValues => ({...prevValues, [name]:value}))
    }

    const handleCheckboxChange = (event) => {
      setChecked(!chacked)
    }
  
    return (
      <span>
        <Button className="btn btn-success addWorkerBtn" title={openBtn} onClick={handleClickOpen}/>
        <Dialog  open={open} onClose={handleClose}>
          <DialogTitle >{dialogTitle}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              name="first_name"
              label="Անուն*"
              type="text"
              style={{width: "500px"}}
              variant="standard"
              value={values.first_name}
              onChange={handleChange}
              error={!!error.first_name.required}
              helperText={error.first_name.required}
            />
            <TextField
              autoFocus
              margin="dense"
              id="last_name"
              name="last_name"
              label="Ազգանուն*"
              type="text"
              style={{width: "500px"}}
              variant="standard"
              value={values.last_name}
              onChange={handleChange}
              error={!!error.last_name.required}
              helperText={error.last_name.required}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Էլ․ հասցե*"
              type="text"
              style={{width: "500px"}}
              variant="standard"
              value={values.email}
              onChange={handleChange}
              error={!!error.email.required || !!error.email.invalid}
              helperText={error.email.required ? "Պարտադիր դաշտ" : "սխալ Հասցե"}
            />
            <TextField
              autoFocus
              margin="dense"
              id="position"
              name="position"
              label="Բաժին*"
              type="text"
              style={{width: "500px"}}
              variant="standard"
              value={values.position}
              onChange={handleChange}
              error={!!error.position.required}
              helperText={error.position.required}
            />
            <FormGroup>
                <FormControlLabel onChange={handleCheckboxChange} control={<Checkbox />} label="Ադմինիստրատոր" />
            </FormGroup>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              name="password"
              label="Գաղտնաբառ*"
              type="password"
              style={{width: "500px"}}
              variant="standard"
              value={values.password}
              onChange={handleChange}
              error={!!error.password.required || !!error.password.invalid}
              helperText={error.password.required ?"Պարտադիր դաշտ" : "Ավելի քան 8 նիշ"}
            />
          </DialogContent>
          <DialogActions>
            <Button className="btn btn-danger acceptCancelBtns" onClick={handleFormAccept} title={acceptBtn} />
            <Button className="btn btn-secondary acceptCancelBtns" onClick={handleClose} title={denyBtn}/>
          </DialogActions>
        </Dialog>
      </span>
    )
}