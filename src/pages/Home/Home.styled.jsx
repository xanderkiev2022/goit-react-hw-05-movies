import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
`;

export const Img = styled.img`
  width: 100%;
  height: 94%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: var(--box-shadow);

  }
`;

export const Title = styled.p`
  margin: 5px;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--primary-text-color);
  font-weight: 500;
`;

export const H2 = styled.h2`
  margin-bottom: 15px;
`;
