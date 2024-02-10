import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';

const currencies = [
  {
    value: 'Thailand',
    label: 'Thailand',
  },
  {
    value: 'Japan',
    label: 'Japan',
  }
];

const currencies2 = [
  {
    value: 'ฺBangkok',
    label: 'Bangkok',
  },
  {
    value: 'ChiangMai',
    label: 'ChiangMai',
  },
  {
    value: 'Tokyo',
    label: 'Tokyo',
  },
  {
    value: 'Osaka',
    label: 'Osaka',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', margin: '0' }
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container direction={"row"} spacing={8}>
        <Grid item>
          <TextField
            id="outlined-select-currency"
            select
            label="Country"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          <TextField
            id="outlined-select-currency"
            select
            label="State"
          >
            {currencies2.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          <TextField label="Zip" variant="outlined" />
        </Grid>
      </Grid>
    </Box>
  );
}
