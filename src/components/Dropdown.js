import React, {useState, useRef, useEffect, useCallback} from 'react'

function Dropdown() {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef()
    
    const evnt = useCallback((e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false)
            console.log("ok")
        }
    })
    

    useEffect(() => {
        window.addEventListener("click",evnt)
        return () => window.removeEventListener("click", evnt)
    }, [evnt])

    const openDropdown = () => {
        setOpen(prev => {
            return !prev
        })
    }

    return (
        <div id="dropdown1" ref={dropdownRef} className="dropdown position-left">
            <button onClick={openDropdown} className="dropdown-button"></button>
            {
                open && 
                <div className="dropdown-content" style={{display: "block"}}>
                    <a href="http://localhost:3000">Home</a>
                    <a href="#">About</a>
                </div>  
            }
        </div>
    )
}

export default Dropdown