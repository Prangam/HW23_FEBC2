import ResponsiveAppBar from "../componants/ResponsiveAppBar"
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Card, CardMedia } from "@mui/material";
import LinearWithValueLabel from "../componants/LinearProgressWithLabel";
import BasicCard from "../componants/BasicCard";
import RateThisProduct from "../componants/RateThisProducts";
import Reviews from "../componants/Reviews";
import Specifications from "../componants/Specifications";

function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{marginTop: "3rem", marginBottom: "3rem"}}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card>
              <CardMedia
                component="img"
                alt="camera"
                image="https://images.pexels.com/photos/1260129/pexels-photo-1260129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                height={550}
              />
            </Card>
            <LinearWithValueLabel />
          </Grid>
          <Grid xs={6}>
            <BasicCard />
            <br />
            <Specifications />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <RateThisProduct />
          <br />
          <Reviews />
        </Grid><br />
      </Container>
    </>
  )
}

export default Home