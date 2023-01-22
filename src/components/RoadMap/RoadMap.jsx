import React from 'react'
import roadMap from '../../assets/images/roadMap.png'
import roadMapMobile from '../../assets/images/roadmapMobile.png'
import styles from './RoadMap.module.css'
const RoadMap = () => {
    return (
        <div className={styles.roadMapContainer}
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <img src={roadMap} alt="" className={styles.roadMapBg} />
            <img src={roadMapMobile} alt="" className={styles.roadMapBgMobileScreen} />
        </div>
    )
}

export default RoadMap