import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
  root: {
    height: '100%',
    padding: 42,
  },
  gridContainer: {
    height: '100%',
  },
  logo: {
    fontSize: 178,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '27px',
    color: '#000',
  },
  body: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: '23px',
    color: '#4A4A4A',
  },
}));
export const counterListStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 0,
  },
}));
export const footerAppBarStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    minHeight: 71,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    flex: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
}));
export default styles;
