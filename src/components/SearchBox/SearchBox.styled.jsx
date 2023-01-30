import styled from 'styled-components';

export const Input = styled.input`
  max-width: 220px;
  border: var(--border);
  border-radius: 4px;
  background-color: #2c2d31;
  color: var(--primary-text-color);
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  background-color: var(--accent-color);
  color: var(--primary-text-color);
  border: var(--border);
  border-radius: 4px;
  font-weight: 700;
  transition: background-color var(--animation-timing-function);
  &:hover,
  &:focus {
    background-color: var(--accent-color-hover);
  }
`;

export const Form = styled.form`
  margin-bottom: 15px;
`;
