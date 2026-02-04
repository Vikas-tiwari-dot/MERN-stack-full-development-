import React from 'react'
import hanuman from '../assets/hanuman.jpeg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='Usercaontainer'>
        <p id='UserName' >{props.name}</p>
        <img id='userimg'  src={hanuman} alt='love' ></img>
        <p id='userDes'>{props.Description}</p>
      
    </div>
  )
}

export default UserCard
