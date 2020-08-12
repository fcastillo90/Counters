import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginLeft: 12,
    height: 48,
  },
  textField: {
    margin: 0,
    '& .MuiInputBase-input': {
      height: 32,
      paddingTop: 9,
      paddingBottom: 7,
    },
    '& .MuiInputAdornment-root': {
      color: '#888B90',
    },
  },
}));
export default styles;
