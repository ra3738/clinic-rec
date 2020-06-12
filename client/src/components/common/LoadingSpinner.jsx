import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../constants/colors';

const LoadingSpinner = withStyles({
  root: {
    height: 10,
    backgroundColor: colors.lightBlue,
  },
  barColorPrimary: {
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
  },
})(LinearProgress);

export default LoadingSpinner;
