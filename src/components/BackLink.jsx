import PropTypes, { object, string } from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: var(--accent-color);
  }
`;

export const BackLink = ({ to, children }) => {
  console.log('to :>> ', to);
  console.log('children :>> ', children);
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
