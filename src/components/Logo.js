import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const Logo = () => {
  return (
    <LogoWrapper>
      <h1>Today Check</h1>
      <AiOutlineCheck />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: 'Josefin Sans', sans-serif;

  h1 {
    margin-right: 0.5rem;
  }
`;
