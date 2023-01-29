export const SharedLayout = () => {
  return (
    <Container>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Outlet />
    </Container>
  );
};

return (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
);
