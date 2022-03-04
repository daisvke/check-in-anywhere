import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Link to="./questionnaire">START CHECK-IN !</Link>
    </div>
  );
}

export default Home;
