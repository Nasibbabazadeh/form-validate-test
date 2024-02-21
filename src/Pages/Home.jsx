import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Home section</h1>
            <Link to="message">Go textarea section</Link>
        </div>
    )
}
