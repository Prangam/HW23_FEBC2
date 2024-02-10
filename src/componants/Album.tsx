import { Container, Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Album() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ width: '100%', maxWidth: 'auto', textAlign: 'center', marginTop: '6rem', marginBottom: '6rem' }}>
      
      <Typography variant="h3" gutterBottom>
        Album example
      </Typography>
      <Typography variant="h5" gutterBottom sx={{color: '#757575'}}>
      Something short and leading about the collection below-its contents, <br/>
      the creator, etc. Make it short and sweet, but not too short so folks <br/>
      don't simply skip over it entirely.
      </Typography>
      <br/>
      <Stack spacing={2} direction="row" sx={{ justifyContent: 'center'}}>
      <Button variant="contained">Main call to action</Button>
      <Button variant="contained" sx={{bgcolor: '#616161', ":hover":{
        bgcolor: '#424242'
      }}}>Secondaly action</Button>
    </Stack>
    </Box>
    </Container>
  );
}

