import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import RowRadioButtonsGroup from './RowRadioBottonsGroup';

const style = {
  py: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper'
};

export default function RateThisProduct() {
  return (
    <List sx={style}>
      <ListItem sx={{ bgcolor: '#f5f5f5' }}>
        <ListItemText primary="Rate this Products " />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <RowRadioButtonsGroup/>
      </ListItem>
    </List>
  );
}
