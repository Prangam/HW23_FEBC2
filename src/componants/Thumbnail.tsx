import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center', backgroundColor: '#616161', color: '#fafafa', fontSize: '20px',paddingTop: '8rem', paddingBottom: '8rem', 
}));

export default function Thumbnail() {
  return (
    <Stack >
      <DemoPaper variant="elevation"><h3>Thumbnail</h3></DemoPaper>
    </Stack>
  );
}
