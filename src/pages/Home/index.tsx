import { Box } from '@mui/material';
import { TimeSinceDisplay } from 'components/TimeSinceDisplay';
import { makeStyles } from 'tss-react/mui';
import { withHookHoc } from 'util/withHookHoc';
import { HomeComponentProps, useHomeLogic } from './useHomeLogic';

const useStyles = makeStyles()(() => ({
  percent: {
    fontSize: '2rem',
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
  percentOfAMonth,
  timeSince,
}: HomeComponentProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <TimeSinceDisplay {...timeSince?.[0]} />
      <TimeSinceDisplay {...timeSince?.[1]} size="h6" />
      <Box className={classes.percent}>{percentOfAMonth}%</Box>
    </Box>
  );
};

export const Home = withHookHoc(HomeComponent, useHomeLogic);
