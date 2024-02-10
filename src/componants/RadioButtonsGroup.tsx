import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><h2>Payment</h2></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Credit card" control={<Radio />} label="Credit card" />
                <FormControlLabel value="Debit card" control={<Radio />} label="Debit card" />
                <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
        </FormControl>
    );
}
