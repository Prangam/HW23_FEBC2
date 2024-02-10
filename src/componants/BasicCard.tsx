import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicTextFields from './BasicTextFields';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <b>Product Name</b>
        </Typography><br/>
        <Typography>
          Product Description goes here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi eos, tempore quam suscipit totam inventore autem quae aut et.
        </Typography><br/>
        <Typography variant='h6'>
          <b>Price: $99</b>
        </Typography><br/>
        <Typography>
          Quantity:
        </Typography><br/>
        <BasicTextFields/><br/>
        <Button variant="contained"  href="/#/Checkout">Add to card</Button>
      </CardContent>
    </Card>
  );
}
