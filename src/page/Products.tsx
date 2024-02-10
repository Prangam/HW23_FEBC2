import ImgMediaCard from "../componants/ImgMediaCard";
import ResponsiveAppBar from "../componants/ResponsiveAppBar";
import Album from "../componants/Album";
import { Grid, Container } from "@mui/material";

function Products() {
  return (
    <>
      <ResponsiveAppBar />
      <Album />
      <Container maxWidth="lg" sx={{marginBottom: "3rem"}} >
        <Grid container spacing={2} >
          <Grid xs={4} alignItems="center"  display={"flex"} flexDirection={"column"}>
            <ImgMediaCard />
            <ImgMediaCard />
          </Grid>
          <Grid xs={4} alignItems="center" display={"flex"} flexDirection={"column"}>
            <ImgMediaCard />
            <ImgMediaCard />
          </Grid>
          <Grid xs={4} alignItems="center" display={"flex"} flexDirection={"column"}>
            <ImgMediaCard />
            <ImgMediaCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Products