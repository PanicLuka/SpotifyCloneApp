import classes from './Home.module.css'

import Playlists from '../PlaylistList/Playlists'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  const categoryDinner = 'dinner'
  const categoryFocus = 'focus'

  return (
    <div className={classes.containerMain}>
     <Sidebar/> 
    <div className={classes.divHome}>
      <p className={classes.featuredPlaylistTitle}>Featured</p>

      <div className={classes.featuredPlaylist}>
        <Playlists category={categoryFocus} />
      </div>

      <p className={classes.dinnerPlaylistTitle}>Dinner</p>
      <div className={classes.dinnerPlaylists}>
        <Playlists category={categoryDinner} />
      </div>
      <hr className={classes.hr}></hr>
    </div>
    </div>

  )
}
export default Home
