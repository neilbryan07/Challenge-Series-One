
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'rgb(217 119 6)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(217 119 6)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(217 119 6)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(217 119 6)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(217 119 6)',
      },

      color:'white'
    
    },
});


export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('rgb(249 115 22)'),
    backgroundColor: 'rgb(180 83 9)',
    '&:hover': {
      backgroundColor: 'rgb(249 115 22)',
    },
}));