import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 500px;
  //overflow-y: scroll;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin-bottom: 15px;
  padding: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Author = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const NoInfoDiv = styled.p`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;
`;
