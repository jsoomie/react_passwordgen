import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { NavbarIcon } from "./NavbarIcon";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <NavbarIcon />
          <NavbarLinks />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
