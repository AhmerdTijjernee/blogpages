import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <header className='head-section'>
        <h1>Welcome to my official blog page</h1>
      </header>

      <section className='section-container'>
        <Link to={'create-post'}><button className="btn-create">Create Post</button></Link>
        <Link to={'view-post'}><button className="btn-view">View Post</button></Link>
      </section>
    </div>
  )
}

export default Home;