import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </Link>
          <Link to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
