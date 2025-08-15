import { useNavigate } from 'react-router-dom'


const Home = ({ user }) => {
    let navigate = useNavigate()

    return (
        <div className="home-css">
        <h1>Welcome to SQ system </h1>
        <p>Your full Enterprise System</p>
        {/* <section className="welcome-signin">
            {!user && (
            <button onClick={() => navigate('/user/login')}>Sign In</button>
            )}
        </section> */}
        </div>
    )
}

export default Home