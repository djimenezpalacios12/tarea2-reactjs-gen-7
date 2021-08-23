import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

// ! Revisar Documentacion de la api

/**
 * Llave API (v3 auth)
 * 4029d79d74e42928c21cfa6bcdf1eda4
 *
 *
 * Ejemplo de Solicitud API
 * https://api.themoviedb.org/3/movie/550?api_key=4029d79d74e42928c21cfa6bcdf1eda4
 *
 *
 * Token de acceso de lectura a la API (v4 auth)
 * eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDI5ZDc5ZDc0ZTQyOTI4YzIxY2ZhNmJjZGYxZWRhNCIsInN1YiI6IjYxMjJmMzA3MGYyZmJkMDA4MThkYzRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9ur5AxwekfEQA3x2GVX4-piclkKFJ6IDoLpYVuOsqs
 */

const api_key = "api_key=4029d79d74e42928c21cfa6bcdf1eda4";
const base_url = "https://api.themoviedb.org/3";
const search_url = "/discover/movie?sort_by=popularity.desc&";
const search_API = base_url + search_url + api_key;

const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4029d79d74e42928c21cfa6bcdf1eda4";
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4029d79d74e42928c21cfa6bcdf1eda4
// const search = "https://api.themoviedb.org/3/movie/550?api_key=4029d79d74e42928c21cfa6bcdf1eda4";
// const search_API = `https://api.themoviedb.org/3/movie/discover/movie?sort_by=popularity.desc?api_key=${api_key}`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Cartel = () => {
  const classes = useStyles();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-3">
      <Card className={classes.root}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cartel;
