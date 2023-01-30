import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './SharedLayout.styled';

export default function SharedLayout() {
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
