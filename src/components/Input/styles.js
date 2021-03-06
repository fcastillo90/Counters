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
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.02)',
    '& .MuiInputBase-input': {
      height: 32,
      paddingTop: 9,
      paddingBottom: 7,
    },
    '& .MuiOutlinedInput-adornedStart': {
      backgroundColor: '#fff',
    },
    '& .MuiInputAdornment-root': {
      color: '#888B90',
    },
  },
  commomRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: '9px 0',
  },
  commomInput: {
    border: '1px solid rgba(0, 0, 0, 0.15)',
    boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    margin: 0,
    '& .MuiInputBase-input': {
      height: 32,
      paddingTop: 6,
      paddingBottom: 6,
    },
  },
}));
export default styles;
