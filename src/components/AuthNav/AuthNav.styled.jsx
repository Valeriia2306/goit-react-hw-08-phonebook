import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 25px;
`;
export const Link = styled(NavLink)`
  color: #00e676;
  font-size: 25px;
  line-height: 20px;
  font-weight: 600;
  &.active {
    color: #3f51b5;
  }
  /* :hover {
    color: #e84a5f;
  } */
`;
