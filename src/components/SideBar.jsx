import { Link } from 'react-router-dom'
import '../styles/App.css'

const Sidebar = ({ signedUser, handleLogout }) => {
    if (!signedUser) return null

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Welcome, {signedUser.name}!</h3>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Link to={`/user/${signedUser.id}/products`}>Products</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/suppliers`}>Suppliers</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/users`}>Users</Link>
                    </li>
                    <li>
                        <button className="sidebar-logout" onClick={handleLogout}>Sign out</button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar