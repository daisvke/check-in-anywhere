import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Home() {/*
  const state = store.getState()
  const currentPage = useSelector((state) => state.currentPage)*/

  const HomeDiv = styled.div`
    display: flex;
    flex-direciton: column;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    width: 100vw;
  `

  return (
    <HomeDiv>
      <Link to="./check-in">START CHECK-IN !</Link>
    </HomeDiv>
  );
}

export default Home;
