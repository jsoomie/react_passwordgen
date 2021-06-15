import { Grid, Link } from "@material-ui/core";

export const NavbarLinks = () => {
  return (
    <Grid item style={{ border: "1px solid red" }}>
      <Link color="inherit">Home</Link>
      <Link color="inherit">About</Link>
    </Grid>
  );
};

export default NavbarLinks;
