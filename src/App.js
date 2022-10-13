import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Div>sssssss</Div>
    </Fragment>
  );
};

export default App;

const Div = styled.h1`
  border: 1px solid black;
`;
