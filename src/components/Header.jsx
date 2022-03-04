import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <h1>CHECK IN ANYWHERE</h1>
            <Link to="/">HOME</Link>
        </nav>
    )
}

export default Header