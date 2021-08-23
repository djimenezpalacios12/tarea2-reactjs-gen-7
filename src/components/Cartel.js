import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import { MovieContext } from "../context/movieContext";

const Cartel = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="m-3">
      <div className="row d-flex justify-content-center">
        {movies &&
          movies.map((movie, index) => {
            return (
              <div key={index} className="col-12 col-lg-3 m-2">
                <Card className="">
                  <CardHeader
                    title={movie.original_title}
                    subheader={`Release Date: ${movie.release_date}`}
                  />
                  <div className="d-flex justify-content-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="poster"
                      width="300"
                      height="400"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {movie.overview}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-info"
                      component="p"
                    >
                      <span>Popularity: </span>
                      {movie.popularity}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cartel;
