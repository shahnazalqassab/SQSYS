import { Link } from 'react-router-dom'
import '../styles/App.css'

const NavBar = ({ signedUser, handleLogout }) => {
    let userOptions

    if (signedUser) {
        userOptions = (
            <nav>
                <div className = "nav-left">
                    <h3> Welcome, {signedUser.name}!</h3>
                </div>
                <div className="nav-right">
                {/* <Link to={`/user/${user.id}/products`}>Products</Link>
                <Link to={`/user/${user.id}/suppliers`}>Suppliers</Link>                
                <Link to={`/user/${user.id}/users`}>Users</Link>                 */}
                <Link to={`/user/${signedUser.id}/dashboards`}>Dashboards</Link>                
                <button onClick={handleLogout} to="/">Sign out</button>
            </div>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <div className="nav-left">
                {/* <h3>Welcome to ZOOM Graphics</h3> */}
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
            <img className = "logo" src = "src/images/logo.PNG" alt = "logo" />
            </Link>
            {signedUser ? userOptions : publicOptions}
        </header>
    )
}

export default NavBar