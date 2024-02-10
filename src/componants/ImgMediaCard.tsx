import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Thumbnail from './Thumbnail';
import { ButtonGroup } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 460, margin: "1rem"}}>
      <Thumbnail />
      <CardContent>
        <Typography variant="h6" >
          This is a wider card with support text below as a natural lead-in to additional content. This content is a little bit longer.
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          disableElevation
          variant="outlined"
          aria-label="Disabled elevation buttons"
          color='inherit'
          sx={{marginBottom: '1rem', marginLeft: '6px'}}
        >
          <Button>View</Button>
          <Button>Edit</Button>
        </ButtonGroup> 
      </CardActions>
    </Card>
  );
}
