export function MoviesGallery({
  id,
  title,
  vote_count: votes,
  backdrop_path: img,
}) {
  return (
    <>
      <img />
      <h2>{title}</h2>
      <p>User Score: {votes}%</p>
      <h3>Overview {votes}%</h3>
      <h3>Genres {votes}%</h3>
    </>
  );
}
