import React from 'react'
import image from './img.jpg'
export default function profil(props) {
  return (
    <div>
        <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      <h2>{props.profession}</h2>

      <img className='image' src={props.image}></img>
    </div>
  )
}

