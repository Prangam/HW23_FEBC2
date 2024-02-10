import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Container, Typography } from '@mui/material';
import Redeem from './Redeem';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper'
};

export default function YourCard() {
    return (
        <>
        <Container>
        <Typography variant="h4" gutterBottom>
            Your Card   
        </Typography>
        
        <br/>
        <List sx={style}>
            <ListItem>
                <ListItemText primary="Product name" secondary="Brief description" />
                <ListItemText secondary="$12" sx={{textAlign: 'right'}} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Second product" secondary="Brief description" />
                <ListItemText secondary="$8" sx={{textAlign: 'right'}} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Third item" secondary="Brief description" />
                <ListItemText secondary="$5" sx={{textAlign: 'right'}} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Promo code" secondary="EXAMPLECODE" />
                <ListItemText secondary="-$5" sx={{textAlign: 'right'}} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Total (USD)" />
                <ListItemText primary="$20" sx={{textAlign: 'right'}} />
            </ListItem>
            <Divider component="li" />
        </List><br/>
        <Redeem />
        </Container>
        </>
    );
}

