import { Link } from 'react-router-dom'
import styled from 'styled-components';
import colors from '../utils/colors';

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
  const HomeLink = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    font-weight: 500;
    color: white;
    background-color: red;
    padding: .6em;
    &:hover {
      opacity: .7;
    }
  `

  return (
    <HomeDiv>
      <HomeLink to="./check-in">START CHECK-IN !</HomeLink>
    </HomeDiv>
  );
}

export default Home;
