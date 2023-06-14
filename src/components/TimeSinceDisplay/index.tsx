import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { TimeSince } from 'types';

const useStyles = makeStyles()(() => ({
  label: {
    fontSize: '0.5em',
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const TimeSinceDisplay = ({
  days,
  hours,
  minutes,
  seconds,
  size = 'h2',
}: Partial<TimeSince> & { size?: 'h2' | 'h6' }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant={size}
        sx={{
          ta: 'center',
        }}>
        {days} <span className={classes.label}>days</span>
      </Typography>
      <Typography
        variant={size}
        sx={{
          ta: 'center',
        }}>
        {hours} <span className={classes.label}>hours</span>
      </Typography>
      <Typography
        variant={size}
        sx={{
          ta: 'center',
        }}>
        {minutes} <span className={classes.label}>minutes</span>
      </Typography>
      <Typography
        variant={size}
        sx={{
          ta: 'center',
        }}>
        {seconds} <span className={classes.label}>seconds</span>
      </Typography>
    </Box>
  );
};
