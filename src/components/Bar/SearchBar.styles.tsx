import { SxProps } from '@mui/material';


export const textFieldStyle: SxProps = {
  marginLeft: 2,
  transition: "flex-basis 0.5s",
  flexBasis: "50%",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#9c27b0",
    },
  },
};