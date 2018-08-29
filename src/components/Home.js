import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  text: {
    maxWidth: '95%',
    marginTop: theme.spacing.unit * 3,
  },
});

class Home extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant='display2' className={classes.text}>
        Beehive Labs
        </Typography>
        <Typography variant='title' className={classes.text}>
          The Future of Health Data Recording
        </Typography>
        <Typography variant='body1' className={classes.text}>
          Your Data. Your Choice
        </Typography>
        <Typography variant='title' className={classes.text}>
          My Diabetes Doctor
        </Typography>
        <Typography variant='body1' className={classes.text}>
         Diabetes Mellitus Type 2 is a chronic life long disease which affects the
         body's ability to utilize glucose. And due to the chronicity of this disease
         the personal and financial considerations are enormous.
        </Typography>
        <Typography variant='title' className={classes.text}>
          Epidemiology
        </Typography>
        <Typography variant='body1' className={classes.text}>
        The World Health Organization estimates that in 2015, 1.6 million deaths were caused
        directly by Diabetes. Another 2.2 million deaths were attributable to high blood glucose in 2012.
        It is a major cause of blindness, kidney failure, heart attacks, stroke
        and lower limb amputation.
          <a href=' http://www.who.int/en/news-room/fact-sheets/detail/diabetes   '> Click here </a>.
        </Typography>
        <Typography variant='title' className={classes.text}>
          BLOCKCHAIN SOLUTIONS
        </Typography>
        <Typography variant='body1' className={classes.text}>
          The Centers for Disease Control in 2017 identified 30.2 million people with unidagnosed Diabetes
          in the United States alone. Reports are even staggering for countries with no system for
          proper Health Data Recording. Today, with a decentralized application, we can now fill the gaps
          where other systems have failed. Let us help you in taking your data back to your hands. For more information
           <a href=' https://www.linkedin.com/in/louell-s-74745a37/detail/recent-activity/shares/  '> Click here </a>.

        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
