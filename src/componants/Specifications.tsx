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

export default function Specifications() {
  return (
    <List sx={style}>
      <ListItem sx={{ bgcolor: '#f5f5f5' }}>
        <ListItemText primary="Specifications" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Display: 6.1 inches" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Resolution: 1080 x 2400 pixels" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Processor: Snapdragon 888" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="RAM: 8GB" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Storage: 128GB" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Battery: 4500mAh" />
      </ListItem>
    </List>
  );
}
