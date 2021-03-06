import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
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
  secondButton: {
    color: theme.palette.primary.main,
  },
}));

export const createDialogStyle = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    flex: 1,
    fontWeight: 600,
    fontSize: 22,
    lineHeight: '30px',
  },
  dialogRoot: {
    top: '15px !important',
    '& .MuiPaper-root': {
      borderRadius: '16px 16px 0px 0px',
      [theme.breakpoints.up('sm')]: {
        borderRadius: 16,
      },
    },
  },
  closeIcon: {
    color: '#C4C4C4',
    fontSize: 28,
  },
  inputTitle: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: '23px',
    color: '#000',
  },
  inputCaption: {
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: '20px',
    color: '#888B90',
  },
  inputContainer: {
    marginTop: 21,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 21,
      minHeight: '50vh',
    },
  },
  exampleOverflow: {
    padding: 0,
  },
  exampleTitle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  loaderContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      marginTop: '25%',
    },
  },
}));
