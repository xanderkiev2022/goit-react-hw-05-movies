import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 94%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 30px;
  font-weight: 600;
`;

export const H3 = styled.h3`
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
  display: flex;
`;

export const Text = styled.span`
  margin: 5px 0;
  font-size: 20px;
  font-weight: 400;
`;

export const StyledLink = styled(Link)`
  padding: 8px 115px;
  margin-bottom: 10px;
  text-decoration: none;
  color: var(--primary-text-color);
  font-weight: 600;
  font-size: 25px;
`;
