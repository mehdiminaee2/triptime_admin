import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://react.school" underline="hover">
        React School
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    name: "Login",
    description: "Log in or register users for your app.",
    img: "Login.PNG",
    path: "login",
  },
  {
    name: "Profile",
    description: "A profile dashboard page for viewing a user's data",
    img: "Profile.PNG",
    path: "profile",
  },
  {
    name: "Dashboard",
    description:
      "A detailed analysis of business revenue with actions and integrated expense adding.",
    img: "Dashboard.PNG",
    path: "dashboard",
  },
  {
    name: "Redux Table",
    description:
      "A functioning CRUD table built with Redux. Add, delete and edit multiple users.",
    img: "Crud.PNG",
    path: "people",
  },
  {
    name: "Map",
    description: "A Google Map API integration for location based services.",
    img: "Map.PNG",
    path: "map",
  },
  {
    name: "Components",
    description: "View all components built for this theme.",
    img: "components.PNG",
    path: "components",
  },
];

export function Home() {
  const classes = useStyles();

  return (
    <>

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              سرویس ارائه ی زمان حرکت قطار 
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              جهت استفاده ی راهبران مترو شهر شیراز
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    component={RouterLink}
                    to={"/login"}
                    variant="contained"
                    color="primary"
                  >
                    ورود به سیستم
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`img/${card.img}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="secondary"
                      variant="outlined"
                      component={RouterLink}
                      to={`/${card.path}`}
                      fullWidth
                    >
                      نمایش
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          پاورقی
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          محتوی پاورقی
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}
