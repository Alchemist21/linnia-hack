import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  text: {
    maxWidth: '50%',
    marginTop: theme.spacing.unit * 3,
  },
});

class Home extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div>
        <h1>DApp that addresses the diabetes reporting problem (using blockchain)</h1>
        This is the app!
      </div>
    );
  }
}
export default withStyles(styles)(Home);
