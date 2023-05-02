import React from 'react'
import classes from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom'
import {
  Spotify,
  HouseDoor,
  SearchHeart,
  CollectionPlay,
  PlusSquare,
  HeartFill,
} from 'react-bootstrap-icons'

const Sidebar = () => {
  const navigate = useNavigate()

  const toHome = () => {
    navigate('/home')
  }

  return (
    <>
      <div className={classes.sideBarDiv}>
        <div className={classes.spotifyLogoDiv}>
          <Spotify className={classes.spotifyLogo} />
          <p className={classes.title}>Spotify</p>
        </div>
        <div className={classes.listItemsDiv}>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <HouseDoor className={classes.homeLogo} />
            </div>
            <p className={classes.itemsTitle} onClick={toHome}>
              Home
            </p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                color="grey"
                fill="currentColor"
                class="bi bi-search-heart"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
              </svg> */}
              <SearchHeart className={classes.searchLogo} />
            </div>

            <p className={classes.itemsTitle}>Search</p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <CollectionPlay className={classes.libraryLogo} />
            </div>
            <p className={classes.itemsTitle}>Your library</p>
          </div>
          <div className={classes.yourPlaylistDiv}>
            <div className={classes.svgItems}>
              <PlusSquare className={classes.makeAPlaylistLogo} />
            </div>
            <p className={classes.itemsTitle}>Make a playlist</p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <HeartFill className={classes.likedSongsLogo} />
            </div>
            <p className={classes.itemsTitle}>Liked songs</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
