import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </NavLink>
          <NavLink to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
