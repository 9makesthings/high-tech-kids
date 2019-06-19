import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    float: "right",
  },
})

class LogOutButton extends Component {

  handleClick = () => {

    this.props.dispatch({ type: 'LOGOUT' });
    this.props.history.push('/home');
  }

  render() {
    const { classes } = this.props;

    return (
      <Button
        // This button shows up in multiple locations and is styled differently
        // because it's styled differently depending on where it is used, the className
        // is passed to it from it's parents through React props
        className={this.props.className}
        className={classes.button}
        onClick={this.handleClick}
        color="inherit"
        
      >
        Log Out
      </Button>
    )
  }

};

LogOutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withRouter(withStyles(styles)(LogOutButton)));