import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';

export default function Redeem() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Promo code"
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button variant="contained" sx={{ p: '7px', bgcolor: '#616161', margin: '4px',
      ":hover":{
        bgcolor: '#424242'
      }
      }}>
        Redeem
    </Button>
    </Paper>
  );
}
