import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Title from "./Title";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ChevronRight from "@mui/icons-material/ChevronRight";
import BankIcon from "@mui/icons-material/AccountBalance";
import ContactSupport from "@mui/icons-material/ContactSupport";
import SpeedIcon from "@mui/icons-material/Speed";
import { blue, green, pink } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  green: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: green[500],
  },
}));

export default function Tools() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Manage your account</Title>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.green}>
              <SpeedIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" size="large">
              <ChevronRight />
            </IconButton>
          }
          title="Credit Check"
          subheader="View your credit score and verify identity"
        />
      </CardActionArea>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.blue}>
              <BankIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" size="large">
              <ChevronRight />
            </IconButton>
          }
          title="Find your bank"
          subheader="Find nearby banks for your location"
        />
      </CardActionArea>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.pink}>
              <ContactSupport />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" size="large">
              <ChevronRight />
            </IconButton>
          }
          title="Contact us"
          subheader="Have questions? Contact us here"
        />
      </CardActionArea>
    </React.Fragment>
  );
}
