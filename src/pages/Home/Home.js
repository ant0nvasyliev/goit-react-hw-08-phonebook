import {HomePageContainer} from './Home.styled'

export default function Home() {
  return (
    <HomePageContainer>
      <h1>
        Welcome to the phone book{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </HomePageContainer>
  );
}
