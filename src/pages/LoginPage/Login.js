import styled from 'styled-components';
import { useState } from 'react';
import Logo from '../../components/Logo';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SiNaver } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { SlLogin } from 'react-icons/sl';
import { IoPersonAdd } from 'react-icons/io5';

const Login = () => {
  const [isLoginClick, setIsLoginClick] = useState(false);

  const onClickLoginBtn = () => {
    setIsLoginClick(!isLoginClick);
  };
  return (
    <LoginWrapper>
      <LoginBox>
        <Logo />
        {isLoginClick && (
          <InputBox
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-input"
              label="Id"
              type="text"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <LoginBtn
              variant="outlined"
              color="info"
              size="large"
              type="submit"
            >
              로그인
            </LoginBtn>
          </InputBox>
        )}
        <BtnWrapper spacing={2} direction="column">
          {!isLoginClick && (
            <>
              <Button
                variant="contained"
                size="large"
                onClick={onClickLoginBtn}
              >
                <div>
                  <SlLogin />
                  로그인
                </div>
              </Button>
              <Button variant="contained" size="large" color="info">
                <div>
                  <IoPersonAdd />
                  회원가입
                </div>
              </Button>

              <Button variant="contained" size="large" color="error">
                <div>
                  <FcGoogle />
                  구글로 시작하기
                </div>
              </Button>
              <Button variant="contained" size="large" color="success">
                <div>
                  <SiNaver />
                  <p>네이버로 시작하기</p>
                </div>
              </Button>
            </>
          )}
        </BtnWrapper>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  height: 25rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border: 1px solid rgba(38, 82, 255, 0.8);
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
`;

const BtnWrapper = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  Button {
    display: flex;
    padding: auto;
    width: 90%;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      width: 40%;
      margin-left: 1.5rem;
    }
    svg {
      margin-right: 1rem;
    }
  }
`;

const LoginBtn = styled(Button)`
  width: 16rem;
  height: 3rem;
`;
