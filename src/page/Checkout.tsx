import ResponsiveAppBar from "../componants/ResponsiveAppBar";
import { Grid, Container, Box, Typography, TextField } from "@mui/material";
import SelectTextFields from "../componants/SelectTextFields";
import CheckboxLabels from "../componants/CheckboxLabels";
import RadioButtonsGroup from "../componants/RadioButtonsGroup";
import YourCard from "../componants/YourCard";

function Checkout() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{marginBottom: "3rem"}}>
        <Box sx={{ width: '100%', maxWidth: 'auto', textAlign: 'center', marginTop: '6rem', marginBottom: '6rem' }}>
          <Typography variant="h3" gutterBottom>
            Checkout form
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: '#757575' }}>
            Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
          </Typography>
        </Box>
        <Grid container spacing={2}  >
          <Grid xs={8}>
            <Container >
            <Typography sx={{marginBottom: "2rem"}} variant="h4" gutterBottom>
              Billing address
            </Typography>
            <TextField label="First Name" variant="outlined" sx={{ marginRight: '4%', width: '48%' }} />
            <TextField label="Last Name" variant="outlined" sx={{ width: '48%' }} />

            <TextField label="Username" variant="outlined" placeholder="@Username" sx={{ width: '100%', marginTop: '40px' }} />

            <TextField label="Email (Optional)" variant="outlined" placeholder="you@example.com" sx={{ width: '100%', marginTop: '40px' }} />

            <TextField label="Address" variant="outlined" placeholder="1234 Main St" sx={{ width: '100%', marginTop: '40px' }} />

            <TextField label="Address2 (Optional)" variant="outlined" placeholder="Apartment or suite" sx={{ width: '100%', marginTop: '40px' }} />

            <br/><br/><br/>
            
            <SelectTextFields />
            
            <br/><br/>

            <CheckboxLabels />
            
            <br/>

            <RadioButtonsGroup />

            <br/><br/>

            <div>
            <TextField label="Name of card" variant="outlined" sx={{ marginRight: '4%', width: '48%' }} />
            <TextField label="Credit card number" variant="outlined" sx={{ width: '48%' }} />
            </div>
           
            </Container>

          </Grid>

          <Grid xs={4}>
            <YourCard/>
          </Grid>

        </Grid>
      </Container >
    </>
  )
}

export default Checkout