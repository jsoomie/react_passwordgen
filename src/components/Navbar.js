import { AppBar, Toolbar, Link, Grid } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";

export const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <Link
              href="/"
              underline="none"
              style={{ color: "#fff", marginLeft: 5 }}
            >
              Password Generator
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
