import React, {useState} from 'react';

function LovePercentage() {
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [in1, setIn1] = useState("")
    const [in2, setIn2] = useState("")
    const [percentage, setPercentage] = useState(-1)

    const h = "\u2764"

    const handleClick = (event) => {
        event.preventDefault()
        const number = Math.floor(Math.random() * 101)
        setPercentage(number)
        setIn1("");
        setIn2("");
    } 

    return (
        <div className="component-div" style={{backgroundColor: "rgb(183, 0, 255)", width:"100%", height: "100%", marginTop:"-1%"}}>
            <form style={{marginTop:"10%"}}>
                <input type="text" value={in1} placeholder={name1} onChange={(e) => {setIn1(e.target.value); setName1(e.target.value); setPercentage(-1)}}></input>
                <button onClick={handleClick} className="pageSelector" style={{backgroundColor: "pink", marginLeft:"10px", marginRight:"10px"}}>Detect love</button>
                <input type="text" value={in2} placeholder={name2} onChange={(e) => {setIn2(e.target.value); setName2(e.target.value); setPercentage(-1)}}></input>
            </form>
        
            {percentage !== -1 && name1 !== "" && name2 !== "" &&
                <div>
                    <div style = {{display : "flex", alignItems : "center", justifyContent : "center"}}>
                        <h3 className="love-h3">{name1}</h3>
                        <h3 className="glow love-h3-gradient ">{h}</h3>
                        <h3 className="love-h3">{name2}</h3>
                    </div>
                    <h1 style={{fontFamily : "Luckiest Guy", color : "#fff", fontSize : "500%", marginTop: "-1%"}}>{percentage}%</h1>
                </div>
            }
        </div>
    )
}

export default LovePercentage;