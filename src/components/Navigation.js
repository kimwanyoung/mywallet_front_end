import styled from 'styled-components';
import { useState } from 'react';
import { BsInfoLg } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NAV_LIST = ['홈', '내 패스들', '멤버십 추가요청'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLogo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper>
      <LogoWrapper>
        <Logo onClick={handleClickLogo}>
          <h1>
            myWallets <MdKeyboardArrowDown />
          </h1>
          {isOpen && (
            <SelectBox>
              {NAV_LIST.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </SelectBox>
          )}
        </Logo>
      </LogoWrapper>
      <NavUnderText>
        <BsInfoLg />
        일부 패스 발급이 원할하지 않던 문제가 해결되었습니다. 🌈
      </NavUnderText>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 20vh;
`;

const NavUnderText = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5rem;
  width: 100%;
  height: 40%;
  color: white;
  background-color: rgb(66, 153, 225);
  font-size: 0.9rem;

  svg {
    padding-right: 2rem;
    font-size: 1.3rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  position: relative;
  margin-left: 5rem;
  font-size: 2.5rem;
  cursor: pointer;

  h1 {
    font-weight: 800;
    color: #002b3f;
  }
`;

// rgb(66, 153, 225)

const SelectBox = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 0.7rem;
  font-size: 1rem;
  background-color: white;
  box-shadow: 5px 5px 5px #ededed;

  p {
    padding: 1rem;
  }

  p:hover {
    background-color: #dddddd;
  }

  p:nth-child(1) {
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
  }

  p:nth-child(3) {
    border-bottom-left-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
  }
`;
