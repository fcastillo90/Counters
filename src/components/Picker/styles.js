import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  symbols: {},
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
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '0.02em',
  },
  mainBox: {
    height: 53,
    margin: 0,
    padding: 0,
  },
  typoBox: {
    padding: '22px 0px',
    marginLeft: 24,
  },
  mainBoxActive: {
    background: `${theme.palette.primary.main}33`,
    borderRadius: 6,
  },
}));
export default styles;
