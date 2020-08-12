import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  symbols: {
    margin: 7,
  },
  symbolsPrimary: {
    color: theme.palette.primary.main,
  },
  symbolsSecondary: {
    color: theme.palette.secondary.main,
  },
  labelStyle: {
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 'normal',
    letterSpacing: '0.02em',
  },
  numberStyle: {
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.02em',
  },
  mainBox: {
    height: 53,
    margin: 10,
    padding: 0,
  },
  typoBox: {
    padding: '16px 0px 14px 14px',
  },
  mainBoxActive: {
    background: `${theme.palette.primary.main}33`,
    borderRadius: 6,
  },
}));
export default styles;
