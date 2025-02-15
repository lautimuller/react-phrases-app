import { SxProps } from '@mui/material';
import colors from '../../styles/colors';

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: 4,
};

export const boxStyle: SxProps = {
  display: "flex",
  flexGrow: 1,
  transition: "flex-grow 0.5s",
};

export const searchBarStyle = (searchVisible: boolean): SxProps => ({
  flexBasis: searchVisible ? "50%" : "100%",
  transition: "flex-basis 0.5s",
});

export const buttonContainerStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 2,
  marginBottom: 1,
};

export const buttonPrimaryStyle: SxProps = {
  marginBottom: 1,
  height: 30,
  backgroundColor: colors.primary
};

export const buttonSecondaryStyle: SxProps = {
  marginBottom: 1,
  height: 30,
  backgroundColor: colors.secondary
};