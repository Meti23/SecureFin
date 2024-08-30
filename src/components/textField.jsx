import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ProfileTextField() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="First Name" id="outlined-size-normal" defaultValue="First" />
        <TextField label="Middle Name" id="outlined-size-normal" defaultValue="Mddle" />
        <TextField label="Last Name" id="outlined-size-normal" defaultValue="Last" />
        <TextField label="Email" id="outlined-size-normal" defaultValue="qwer1111@email.com" />
        <TextField label="Phone Number" id="outlined-size-normal" defaultValue="0900112233" />
        <TextField label="Gender" id="outlined-size-normal" defaultValue="Female" />
        <TextField label="Address" id="outlined-size-normal" defaultValue="Addis Ababa" />
      </div>
    </Box>
  );
}
