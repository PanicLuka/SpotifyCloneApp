import React from 'react'
import classes from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  const toHome = () => {
    navigate('/home')
  }

  return (
    <>
      <div className={classes.sideBarDiv}>
        <div className={classes.spotifyLogoDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            color="white"
            fill="currentColor"
            class="bi bi-spotify"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
          </svg>
          <p className={classes.title}>Spotify</p>
        </div>
        <div className={classes.listItemsDiv}>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                color="grey"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
            </div>
            <p className={classes.itemsTitle} onClick={toHome}>
              Home
            </p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <svg
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
              </svg>
            </div>

            <p className={classes.itemsTitle}>Search</p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                color="grey"
                fill="currentColor"
                class="bi bi-collection-play"
                viewBox="0 0 16 16"
              >
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
              </svg>
            </div>
            <p className={classes.itemsTitle}>Your library</p>
          </div>
          <div className={classes.yourPlaylistDiv}>
            <div className={classes.svgItems}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                color="grey"
                fill="currentColor"
                class="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <p className={classes.itemsTitle}>Make a playlist</p>
          </div>
          <div className={classes.titleItemsDiv}>
            <div className={classes.svgItems}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                color="grey"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </div>
            <p className={classes.itemsTitle}>Liked songs</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
