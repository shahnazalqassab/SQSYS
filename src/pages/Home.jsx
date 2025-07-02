import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
    let navigate = useNavigate()

    return (
        <div className="home-css">
        <h1>Welcome to WhiteBoard e-Class</h1>
        <p>Learn everywhere, anytime.</p>
        <p>The sky is your limit</p>
        <section className="welcome-signin">
            {!user && (
            <button onClick={() => navigate('/user/login')}>Sign In</button>
            )}
        </section>
        </div>
    )
}

export default Home