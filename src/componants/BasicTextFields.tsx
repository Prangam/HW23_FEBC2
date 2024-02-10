import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Quantity" variant="outlined" />
    </Box>
  );
}
