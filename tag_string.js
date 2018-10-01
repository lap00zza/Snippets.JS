const giveMeSomeMagic = magic => console.log(magic.join(''));

// Example(ES6)
giveMeSomeMagic`Abra-Cadabra`;  // Abra-Cadabra

//Real-world example: styled-components

/*import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;*/