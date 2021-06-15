import { Fragment } from "react";
import { Grid, Link } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";

export const NavbarIcon = () => {
  return (
    <Fragment>
      <Grid item>
        <LockIcon />
      </Grid>
      <Grid item>
        <Link href="/" underline="none" color="inherit">
          Password Generator
        </Link>
      </Grid>
    </Fragment>
  );
};

export default NavbarIcon;
