import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard/Dashboard";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import People from "./ReduxTable/people";
import Trips from "./Trips/Trips";

import Driver from "./People/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";
import { Home } from "./Home/Home";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return <>
    <LocalizationProvider utils={DateFnsUtils}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
              <Router>
                <AppBarAndDrawer
                  currentTheme={currentTheme}
                  setCurrentTheme={setCurrentTheme}
                />
                <Routes >

                  <Route path="/login" element={<SignIn />} />
                  <Route path="/profile" element={<Driver id={1} />} />

                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route exact path="/people" element={<People />} />

                  <Route path={`/people/:driverId`} element={<Driver />} />

                  <Route path="/map" element={<Trips />} />

                  <Route path="/components" element={<Components />} />

                  <Route path="/settings" element={<Settings
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />} />

                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Home />} />


                </Routes>
              </Router>
            </DataProvider>
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  </>;
}
