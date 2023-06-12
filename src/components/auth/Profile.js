import React from 'react';
import "../auth/profile.css"

function Profile() {
  return (
    <div className='main' style={{MarginTop:"500px"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium alias exercitationem blanditiis! Exercitationem animi amet tenetur dicta libero magnam, perspiciatis repudiandae sint, fugit explicabo debitis! Tempora eius illo est? Dolore!</p>
   
    <h2>Arunkumar VK </h2>
    {/* STATS */}
    <h3>Stats</h3>
    <div className='stats'>
      <div className='stats_ele'>
      <p>1</p>
      <p>reputation</p>
      </div>
      <div className='stats_ele'>
      <p>0</p>
      <p>reached</p>
      </div>
      <div className='stats_ele'>
      <p>0</p>
      <p>answers</p>
      </div>
      <div className='stats_ele'>
      <p>0</p>
      <p>questions</p>
      </div>
    </div>

    {/* ABOUT */}
      <div className='about'>
      <h2>About</h2>
      <p className='text-muted'>Your about me section is currently blank. Would you like to add one? <a href="">Edit profile</a>
</p>
      </div>
      {/* BADGES */}
      <div className='badges'>
        <h2>Badges</h2>
        <p className='text-muted'>You have not earned any badges.</p>
      </div>
    </div>
  )
}

export default Profile
