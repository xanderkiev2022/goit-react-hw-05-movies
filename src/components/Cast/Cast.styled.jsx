import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  margin-left: 10px;
  height: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  display: grid;
  max-width: calc(100vw - 80px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  gap: 5px;
  padding: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const H3 = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
  display: flex;
`;

export const H4 = styled.p`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
`;
