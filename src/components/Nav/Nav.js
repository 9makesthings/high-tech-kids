import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

//----Material UI----
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontFamily: 'Fredoka One',
  },
  button: {
    marginRight: 200,
  },
  link: {
    fontSize: 10,
    margin: theme.spacing(1),
    color: 'white',
  },
  activeLink: {
    color: '#f89829',
  },
  menu: {
    height: 10,
  }
})


const Nav = (props) => (
  <div className="root">
    <AppBar className={styles.menu} >
      <Toolbar>
        <Grid
          justify="space-between"
          container
          spacing={24}
          className={styles.root}
        >

          {/* <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon/>
           </IconButton> */}

          <Grid item>
            <Link to="/home" style={{ textDecoration: 'none' }} >
              <Typography variant="h4" className={styles.title}>
                Mission Control
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            {props.user.id && (
              <LogOutButton />
            )}

            {/* COACH */}
            {props.user.security_clearance === 2 && (
              <>
                <Typography variant="h6" className={styles.link}>
                  <Link className={props.location.pathname === '/missions' ? 
                        styles.activeLink : styles.link } to="/missions"
                        style={{ textDecoration: 'none' }} >
                      View Missions
                  </Link>

                  <Link className={props.location.pathname === '/coach/teams' ? 
                        styles.activeLink : styles.link } to="/coach/teams"
                        style={{ textDecoration: 'none' }} >
                    View Teams
                  </Link>
                </Typography>
              </>
            )}

            {/* TEAM w/o access */}
            {props.user.security_clearance === 3 && (
              <>
                <Link className={props.location.pathname === '/missions' ? 
                      'active nav-link' : 'nav-link'} to="/missions"
                      style={{ textDecoration: 'none' }} >
                  View Missions
                </Link>

                <Link className={props.location.pathname === '/history' ? 
                      'active nav-link' : 'nav-link'} to="/history"
                      style={{ textDecoration: 'none' }} >
                  View Runs
                </Link>
              </>
            )}

            {/* TEAM W/access */}
            {props.user.security_clearance === 4 && (
              <>
                <Link className={props.location.pathname === '/missions' ? 
                      'active nav-link' : 'nav-link'} to="/missions"
                      style={{ textDecoration: 'none' }} >
                  View Missions
                </Link>

                <Link className={props.location.pathname === '/history' ? 
                      'active nav-link' : 'nav-link'} to="/history"
                      style={{ textDecoration: 'none' }} >
                  View Runs
                </Link>

                <Link className={props.location.pathname === '/practice-run' ? 
                      'active nav-link' : 'nav-link'} to="/practice-run"
                      style={{ textDecoration: 'none' }} >
                  Create Run
                </Link>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withRouter(Nav));
