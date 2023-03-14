import { CharactersList } from "components/charactersList/charactersList";
import { useSelector, useDispatch } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import { ButtonContainer, HomeContainer, Logo, LogInButton } from "./Home.styled";
import axios from "axios";
import { loginReducer } from "redux/authSlice";


export const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      dispatch(loginReducer(userInfo.data))
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
            <CharactersList />
          </>
        )}
      </HomeContainer>
    );
}