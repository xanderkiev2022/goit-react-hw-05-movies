export function MoviesGallery({ movies }) {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, ...restProps }) => {
          return (
            <li key={id}>
              <MovieDetails {...restProps} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
