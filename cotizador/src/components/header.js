import React from 'react';
import { StyledHeader } from './style';

const Header = ({titulo}) => {
  return ( 
    <StyledHeader><h1>{titulo}</h1></StyledHeader>
  );
}
 
export default Header;