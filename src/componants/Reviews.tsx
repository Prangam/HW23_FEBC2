import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper'
};

export default function Reviews() {
    return (
        <List sx={style}>
            <ListItem sx={{ bgcolor: '#f5f5f5' }}>
                <ListItemText primary="Reviews" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="John Doe" secondary="Great product! I love the design and the features. Highly recommended!" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Jane Smith" secondary="Amazing value for the price. It has exceed my expections. Will buy again!" />
            </ListItem>
        </List>
    );
}

