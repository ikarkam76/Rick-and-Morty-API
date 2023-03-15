import { CharactersList } from "components/charactersList/charactersList";
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { ButtonContainer, HomeContainer, Logo, LogInButton, LoginTitle } from "./Home.styled";
import { useState } from "react";


export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAuth') || false)
  
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      localStorage.setItem('token', tokenResponse.access_token);
      localStorage.setItem('isAuth', true);
      setIsLoggedIn(true);
    },
    onError: errorResponse => console.log(errorResponse),
  });

  const logout = (ev) => {
    googleLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('filter');
    setIsLoggedIn(false);
  }

    return (
      <HomeContainer>
        <Logo />
        {!isLoggedIn ? (
          <ButtonContainer>
            <LoginTitle>Welcome to this App!</LoginTitle>
            <LogInButton onClick={() => login()}>
              Sign in with Google 🚀{' '}
            </LogInButton>
          </ButtonContainer>
        ) : (
          <>
            <CharactersList logout={logout} />
          </>
        )}
      </HomeContainer>
    );
}