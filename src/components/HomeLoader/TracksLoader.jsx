import ContentLoader from 'react-content-loader'
import classes from './TracksLoader.module.css'

const colors = {
  backgroundColor: '#3f3d3d',
  foregroundColor: '#969393',
}
const TracksLoader = () => {
  return (
    <>
      <ContentLoader
        className={classes.titleDiv}
        backgroundColor={colors.backgroundColor}
        foregroundColor={colors.foregroundColor}
      >
        <rect x="42.84" y="30" rx="5" ry="5" width="232" height="232" />
        <rect x="300" y="30" rx="0" ry="0" width="1250" height="70" />
      </ContentLoader>
      <div className={classes.mainDiv}>
        {Array(10)
          .fill(true)
          .map((_, i) => {
            return (
              <ContentLoader
                key={i}
                className={classes.tracksLoader}
                backgroundColor={colors.backgroundColor}
                foregroundColor={colors.foregroundColor}
              >
                <rect x="70" y="15" rx="5" ry="5" width="1500" height="15" />
                <rect x="70" y="39" rx="5" ry="5" width="1500" height="9" />
                <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
              </ContentLoader>
            )
          })}
      </div>
    </>
  )
}

export default TracksLoader
