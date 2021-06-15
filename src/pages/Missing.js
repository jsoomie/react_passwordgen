import { Container, Typography, Grid, Link, Divider } from "@material-ui/core";
import { SentimentDissatisfied as SadFaceIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export const Missing = () => {
  const history = useHistory();
  const returnHome = () => history.push("/");

  return (
    <Container>
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        style={mt50}
      >
        <Grid item>
          <SadFaceIcon style={iconSize} />
        </Grid>
        <Grid item>
          <Typography variant="h2" align="center">
            404 - Page is missing
          </Typography>
          <Divider />
          <Typography variant="subtitle2" align="center" style={mt10}>
            The page you are looking for is either missing or doesn't exist
          </Typography>
        </Grid>
        <Grid item>
          <Link
            component="button"
            variant="body2"
            underline="always"
            onClick={() => returnHome()}
            style={links}
          >
            Click here to return to homepage
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

const { mt50, mt10, iconSize, links } = {
  mt50: {
    marginTop: 50,
  },
  mt10: {
    marginTop: 10,
  },
  iconSize: {
    fontSize: 250,
    marginBottom: 50,
  },
  links: {
    color: "#333",
    marginTop: 50,
  },
};

export default Missing;
