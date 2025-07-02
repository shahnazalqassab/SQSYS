import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
    let navigate = useNavigate()

    return (
        <div className="home-css">
        <h1>Welcome to ZOOM Graphics</h1>
        <p>Click it, or miss it</p>
        <section className="welcome-signin">
            {!user && (
            <button onClick={() => navigate('/user/login')}>Sign In</button>
            )}
        </section>
        </div>
    )
}

export default Home