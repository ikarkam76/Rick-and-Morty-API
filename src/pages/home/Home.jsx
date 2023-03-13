import { CharactersList } from "components/charactersList/charactersList";
import { useState } from "react";
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { ButtonContainer, HomeContainer, Logo, LogInButton, UserMenuContainer, LogOutButton, UserName} from "./Home.styled";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      setIsLoggedIn(true);
      const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setUser(userInfo.data);
    },
    onError: errorResponse => console.log(errorResponse),
  });

    return (
      <HomeContainer>
        <Logo />
        {!isLoggedIn ? (
          <ButtonContainer>
            <LogInButton onClick={() => login()}>
              Sign in with Google 🚀{' '}
            </LogInButton>
          </ButtonContainer>
        ) : (
          <>
            <UserMenuContainer>
                  <UserName>Hello, {user.name}</UserName>
              <LogOutButton
                type="button"
                onClick={() => {
                  setIsLoggedIn(false);
                  googleLogout();
                }}
              >
                Sign out
              </LogOutButton>
            </UserMenuContainer>
            <CharactersList user={user} />
          </>
        )}
      </HomeContainer>
    );
}