import React from 'react'
import classes from './Footer.module.css'
import spotify from '../../assets/spotify.png'
import fb from '../../assets/fb.png'
import yt from '../../assets/youtube.jpg'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footertitle}>
                The Generics
            </div>

            <div className={classes.footerimg}>
                <img className={classes.img} src={yt} alt='' />
                <img className={classes.img} src={spotify} alt='' />
                <img className={classes.img} src={fb} alt='' />
            </div>

        </div>
    )
}

export default Footer