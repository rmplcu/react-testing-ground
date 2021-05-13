import React, { useState } from 'react'

const NasaCard = ({ img_src, camera, rover }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive((active) => !active)
  }

  return (
    <li className="li-nasa">
      <img
        onClick={handleClick}
        className={`img-nasa ${active ? 'active' : ''}`}
        src={img_src}
        alt={camera.full_name + ' image'}
      ></img>
      {active && (
        <div className="info-nasa" onClick={() => setActive(false)}>
          <p>
            This image was sent by the {rover.name} {camera.full_name}{' '}
          </p>
          <p>
            The rover was launched on {rover.launch_date} and landed on{' '}
            {rover.landing_date} on Mars
          </p>
          <p>Rover status: {rover.status}</p>
          <p>
            Source: <a href="https://mars.nasa.gov">Nasa</a>
          </p>
        </div>
      )}
    </li>
  )
}

export default NasaCard
