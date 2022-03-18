import React from 'react'
import katiezaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card() {
  return (
    <div className='card'>
      <img src={katiezaferes} alt='katie' className='card--image' />
      <div className='card--stats'>
        <img src={star} alt='star' className='card--star' />
        <span className='gray'>5.0</span>
        <span className='gray'>(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className='bold'>From $136 </span> / person
      </p>
    </div>
  )
}
