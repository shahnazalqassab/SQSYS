import { Link } from 'react-router-dom'
import '../styles/App.css'

export const NavBar = ({ user, handleLogout }) => {
    let userOptions

    if (user) {
        userOptions = (
            <nav>
                <div className = "nav-left">
                    <h3> Welcome, {user.name}!</h3>
                </div>
                <div className="nav-right">
                <Link to="/products">Products</Link>
                <Link to="/users">Users</Link>
                <button onClick={handleLogout} to="/">Sign out</button>
            </div>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <div className="nav-left">
                <h3>Welcome to ZOOM Graphics</h3>
            </div>
            <div className="nav-right">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/user/login">Sign in</Link>
            </div>
        </nav>
    )

    return (
        <header>
            <Link to = "/">
            <img className = "logo" src = "src/images/logo.png" alt = "logo" />
            </Link>
            {user ? userOptions : publicOptions}
        </header>
    )
}