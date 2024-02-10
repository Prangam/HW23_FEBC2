import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <Divider />
      <br/>
      <FormControlLabel control={<Checkbox />} label="Shipping address is the same as my billing address" />
      <FormControlLabel control={<Checkbox />} label="Save this information for next time" />
      <br/>
      <Divider />
    </FormGroup>
  );
}

