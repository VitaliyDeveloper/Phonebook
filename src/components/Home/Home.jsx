import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectName, selectToken } from 'redux/auth/auth-selector';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import UserMenuHome from 'components/UserMenuHome/UserMenuHome';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// import audio from '../../audio/Audio.mpeg';
// import ReactAudioPlayer from 'react-audio-player';
import {
  HomeContainer,
  TitleContainer,
  Span,
  Title,
  ListStyle,
  ItemStyle,
} from './Home.styled';

//Styles///////////////////////////////////////////

const Root = styled('div')(({ theme }) => ({
  // margin: theme.spacing(1),
}));

/////////////////////////////////////////////////////

export const Home = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const token = useSelector(selectToken);
  const name = useSelector(selectName);

  const showUpdateFormRegister = () => {
    setRegister(true);
  };
  const showUpdateFormLogin = () => {
    setLogin(true);
  };

  const closeForm = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <>
      <HomeContainer>
        <TitleContainer>
          <Span>Welcome</Span>
          {!name ? <Title>to phonebook</Title> : <Title>{name}</Title>}
        </TitleContainer>
        <ListStyle>
          {!token ? (
            <>
              <ItemStyle>
                <Root>
                  <Button
                    onClick={() => showUpdateFormRegister()}
                    variant="outlined"
                  >
                    Register
                  </Button>
                </Root>
              </ItemStyle>
              <ItemStyle>
                <Root>
                  <Button
                    onClick={() => showUpdateFormLogin()}
                    variant="outlined"
                  >
                    Login
                  </Button>
                </Root>
              </ItemStyle>
            </>
          ) : (
            <UserMenuHome />
          )}
          {register && <RegisterForm closeForm={closeForm} />}
          {login && <LoginForm closeForm={closeForm} />}
        </ListStyle>

        {/* <ReactAudioPlayer src={audio} autoPlay controls /> */}
      </HomeContainer>
    </>
  );
};
