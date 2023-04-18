import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { withHookHoc } from 'util/withHookHoc';
import { HomeComponentProps, useHomeLogic } from './useHomeLogic';

const useStyles = makeStyles()(() => ({
  label: {
    fontSize: '0.5em',
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
}));

export const HomeComponent = ({
  timeSince: { days, hours, minutes, seconds },
}: HomeComponentProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant="h2"
        sx={{
          ta: 'center',
        }}>
        {days} <span className={classes.label}>days</span>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ta: 'center',
        }}>
        {hours} <span className={classes.label}>hours</span>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ta: 'center',
        }}>
        {minutes} <span className={classes.label}>minutes</span>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ta: 'center',
        }}>
        {seconds} <span className={classes.label}>seconds</span>
      </Typography>
    </Box>
  );
};

export const Home = withHookHoc(HomeComponent, useHomeLogic);
