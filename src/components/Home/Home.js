import { GlobalStyle, Button, ContainerImage, HomeContainer, SpanStarWars, Subtitle, Title, ContainerText } from "./Home.styles";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <ContainerImage></ContainerImage>
        <ContainerText>
        <Title>WELCOME TO THE <SpanStarWars>STAR WARS</SpanStarWars> WEBSITE:</Title>
        <Subtitle>Discover the incredible ships of the<SpanStarWars> star wars</SpanStarWars> saga as you have never seen them.</Subtitle>
        <Link to="/starships">
          <Button>EXPLORE</Button>
        </Link>
        </ContainerText>
      </HomeContainer>
    </>
  );
};

export default Home;
