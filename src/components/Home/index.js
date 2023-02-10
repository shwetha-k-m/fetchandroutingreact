import './index.css'
import UserInfo from '../UserInfo'
import BlogsList from '../BlogList'

const Home = () => (
  <div className="home-container">
    {/* <Header /> */}
    <UserInfo />
    <BlogsList />
  </div>
)

export default Home
