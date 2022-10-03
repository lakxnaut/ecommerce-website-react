import classes from './Tour.module.css'


import React from 'react'

const Tour = () => {

    const tourArr = [{
        date: 'JUL 16', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: 'JUL 19', city: 'TORONTO,ON', place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: 'JUL22', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: 'JUL 29', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: 'AUG 2', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: 'AUG 7', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE'
    },


    ]
    return (
        <div className={classes.tour}>
            <div className={classes.title}>Tour</div>


            {tourArr.map(tour => {
                return (<div className={classes.tourInfo}>

                    <span>{tour.date}</span>
                    <span>{tour.city}</span>
                    <span>{tour.place}</span>
                    <span><button className={classes.btn}>BUY TICKETS</button></span>
                </div>)

            })}


        </div>
    )
}

export default Tour

