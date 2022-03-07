import { Link } from 'react-router-dom'

function Home() {/*
  const state = store.getState()
  const currentPage = useSelector((state) => state.currentPage)*/

  return (
    <div className="Home">
      <Link to="./check-in">START CHECK-IN !</Link>
    </div>
  );
}

export default Home;
