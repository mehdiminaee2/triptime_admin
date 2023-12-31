import React from "react";
import { useParams } from "react-router-dom";
import Content from "../Dashboard/Content";
import CircularProgress from "@mui/material/CircularProgress";
import makeStyles from '@mui/styles/makeStyles';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import DriveIcon from "@mui/icons-material/DriveEta";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import VehiclePie from "./VehiclePie";
import RevenueLine from "./RevenueLine";
import PeopleDialog from "./PeopleDialog";
import DeletePeopleDialog from "./DeletePeopleDialog";

import { useSelector } from "react-redux";
import { selectPeople } from "../ReduxTable/peopleSlice";
import ExpensesTable from "../Dashboard/ExpensesTable";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    height: "100px",
  },
  header: {
    display: "flex",
    position: "absolute",
    width: "calc(100%)",
    top: "-70px",
    alignItems: "flex-end",
    "& > *": {
      margin: `${theme.spacing(3)} ${theme.spacing(1)}`,
    },
  },
  spacer: {
    flexGrow: "1",
  },
  avatar: {
    border: `3px solid white`,
    width: theme.spacing(13),
    height: theme.spacing(13),
    boxShadow: theme.shadows[3],
  },
  actionGroup: {
    display: "flex",
    width: "330px",
    justifyContent: "space-between",
    marginRight: 0,
  },
  summaryCards: {
    display: "flex",
    flexWrap: "wrap",
  },
  summaryCard: {
    margin: theme.spacing(1),
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tripCard: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export function SummaryCard({ title, value, component }) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.summaryCard}>
      <Typography color={"textSecondary"} variant="h5" gutterBottom>
        {title}
      </Typography>
      {component || (
        <Typography color={"primary"} variant="h3">
          {value}
        </Typography>
      )}
    </Paper>
  );
}

export default function Driver({ id }) {
  const { driverId } = useParams();
  id = id ? id : driverId;
  const rows = useSelector(selectPeople);
  let driver = rows.find((row) => row.id === +id);
  if (!driver) {
    driver = { name: "hello", id: 3, img: "foo" };
  }
  const classes = useStyles();
  const loading = false;

  if (loading) {
    return (
      <Content>
        <CircularProgress />
      </Content>
    );
  }

  const trips = 4;
  const distance = 0;
  const fare = 0;
  return (
    <Content>
      <div
        style={{
          height: "200px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "contrast(75%)",
          backgroundImage: "url(/img/wallpaper.jpeg)",
        }}
      />
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <Avatar
            alt={driver.name}
            src={driver.img}
            classes={{ root: classes.avatar, circular: classes.circle }}
          />
          <Typography variant={"h5"}>{driver.name}</Typography>
          <Chip variant={"outlined"} icon={<DriveIcon />} label="راهبر" />
          <Rating name="read-only" value={4.3} readOnly />
          <div className={classes.spacer} />
          <div className={classes.actionGroup}>
            <PeopleDialog
              data={driver}
              render={(open) => (
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={open}
                >
                  Edit
                </Button>
              )}
            />
            <DeletePeopleDialog
              ids={id}
              render={(open) => (
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={open} startIcon={<DeleteIcon />}
                >Delete</Button>
              )} />
          </div>
        </div>
      </div>
      <div className={classes.summaryCards}>
        <SummaryCard title={"Revenue"} value={"$" + fare} />
        <SummaryCard title={"Trips"} value={trips} />
        <SummaryCard title={"Miles"} value={distance} />
        <SummaryCard title={"Rating"} value={4.32} />
      </div>
      <div className={classes.summaryCards}>
        <SummaryCard title="Last 30 Days" component={<RevenueLine />} />
        <SummaryCard title="By Vehicle" component={<VehiclePie />} />
      </div>
      <SummaryCard title={"Recent expenses"} component={<ExpensesTable />} />
    </Content>
  );
}
