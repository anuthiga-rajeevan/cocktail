import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'static',
    color: 'white',
    padding: '10px 50px',
  },
  menuDiv: {
    width: '40%',
    display: 'inline',
    justifyContent: 'flex-end',
  },
  textbox: {
    width: '50%',
    justifyContent: 'flex-start',
  },
  typography: {
    display: 'inline',
  },
});

export default useStyles;
