import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  dialogTitle: {
    padding: '19px 27px 6px 27px',
    textAlign: 'center',
    '& .MuiTypography-root': {
      fontSize: 22,
      lineHeight: 1.4,
      color: '#000',
      fontWeight: 600,
    },
  },
  dialogContent: {
    fontSize: 17,
    color: '#4A4A4A',
    marginBottom: 0,
  },
}));
export default styles;
