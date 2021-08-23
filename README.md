<h1 align="center">Tarea 2 - React.js Gen-7</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

## Summary

Tarea 2 del curso de React JS.
La App muestra y lista una cartelera de películas (Películas más populares), permitiendo tambíen buscar por nombre completo o nombres parcialemnte conocidos.

## Technologies

- ReactJS v17.0.2
- Material-UI/core v4.12.3
- Material-UI/icons v4.11.2
- react-router-dom v5.2.0
- CDN Bootstrapt
- The Movie Database (TMDb)

## API

Base de datos de películas y TV construida por la comunidad. Los datos han sido agregados por una comunidad desde el 2008.
Existen 3 caminos para realizar busqueda de los datos (peliculas, Series de TV, etc)

```sh
/search
```

```sh
/discover
```

```sh
/find
```

Para el proyecto se utilizo la API de **/discover**, particularmente esta API en ruta consulta y lista peliculas segín su popularidad.
Implementación:

- Manejo de estado globales **CONTEXT**
  > Se realizá la consulta mediante **FETCH** con ayuda del **useEffect** y **UseState**. la data enviada al componente elegido mediante el **Context Provider**
- Necesaria una cuenta en TMDb para obtener una **API KEY**
- Para realizar el consumo de la API es necesarios, una **Base URL** y una **URL específica** para el caso del servicio utilizado /discover sumado al API KEY

  > Base url: https://api.themoviedb.org/3

  > Servicio: /discover/movie?sort_by=popularity.desc&

  > API KEY

- Para obtener la imágen se debe utilizar un URL base diferente, al que se le debe agregar una ruta de la imágen de cada pelicula

  > Base URL imágen: https://image.tmdb.org/t/p/w500/

  > en particular el parametro **w500** describe el tamaño del archivo a traer.

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Author

👤 **Diego Jiménez Palacios**
