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
    <div className={classes.sideBarDiv}>
      <div className={classes.spotifyLogoDiv}>
        <Spotify className={classes.spotifyLogo} onClick={toHome} />
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
  )
}

export default Sidebar
