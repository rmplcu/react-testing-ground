import React, {useState} from 'react';

function DisplayInfo(props) {
    const [active, setActive] = useState(true);
    const el = props.element;
    console.log(el)
    if (active) {
        return (
            <div className="info-nasa" onClick={()=>setActive(false)}>
                <p>This image was sent by the {el.rover.name} {el.camera.full_name} </p>
                <p>The rover was launched on {el.rover.launch_date} and landed on {el.rover.landing_date} on Mars</p>
                <p>Rover status: {el.rover.status}</p>
                <p>Source: <a href="https://mars.nasa.gov">Nasa</a></p>
            </div>
        ) 
    } else { 
        return (<></>)
    }
}

export default DisplayInfo;