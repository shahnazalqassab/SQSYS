import { Link } from 'react-router-dom'
import '../styles/App.css'

const Sidebar = ({ signedUser, handleLogout }) => {
    if (!signedUser) return null

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                {/* <h3>Welcome, {signedUser.name}!</h3> */}
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Link to={`/user/${signedUser.id}/inventory`}>Inventory System</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/pos`}>Point of Sale</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/accounting`}>Accounting System</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/administration`}>Administration</Link>
                    </li>
                    <li>
                        <Link to={`/user/${signedUser.id}/communications`}>Communications</Link>
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