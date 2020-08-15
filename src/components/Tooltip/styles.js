import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  shareTypo: {
    color: '#000',
    fontSize: 22,
    fontWeight: 600,
    marginTop: 7,
    marginBottom: 13,
    marginRight: 10,
  },
  noteIcon: {
    fontSize: 84,
    margin: '0 17px',
  },
  shareRoot: {
    display: 'flex',
    flexDirection: 'row',
    width: 'max-content',
  },
  shareButton: {
    color: theme.palette.primary.main,
  },
}));
export default styles;
