import { useState } from "react";
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { blue, blueGrey } from "@mui/material/colors";
// import { Vazirmatn } from 'next/font/google';
import "./index.css";

const defaultTheme = {
  palette: {
    primary: blue,
    secondary: blueGrey, //ss,
    type: "dark",
  },
  typography: {
    fontFamily: 'Vazir, Vazirmatn, cursive;',
  },
  status: {
    danger: "orange",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      primary: blue,
      secondary: blueGrey,
    },
  });
  const muiTheme = createTheme(adaptV4Theme({
    ...defaultTheme,
    ...currentTheme,
  }));
  return [muiTheme, setCurrentTheme];
}
