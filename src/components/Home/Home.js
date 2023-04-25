import classes from './Home.module.css'
import PlaylistList from '../PlaylistList/FeaturedPlaylistList'
import DinnerPlaylistList from '../PlaylistList/DinnerPlaylistList'

const Home = () => {
  return (
    <div className={classes.divHome}>
      <p className={classes.featuredPlaylistTitle}>Featured</p>
      <div className={classes.featuredPlaylist}>
        <PlaylistList />
      </div>

      <p className={classes.dinnerPlaylistTitle}>Dinner</p>
      <div className={classes.dinnerPlaylists}>
        <DinnerPlaylistList />
      </div>
      <hr className={classes.hr}></hr>
    </div>
  )
}
export default Home
