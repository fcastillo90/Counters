import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  symbols: {},
  hide: {
    display: 'none !important',
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
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '0.02em',
  },
  mainBox: {
    margin: 10,
    padding: 0,
  },
  typoBox: {
    padding: '15px 4px 14px 15px',
  },
  innerBox: {
    flexFlow: 'nowrap',
  },
  mainBoxActive: {
    background: `${theme.palette.primary.main}33`,
    borderRadius: 6,
  },
}));
export const badgePickerStyles = makeStyles(() => ({
  title: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: '23px',
    color: '#000',
    marginTop: 22,
    marginBottom: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  chips: {
    margin: 8,
    flex: '0 0 auto',
  },
}));
