import React, {useState} from 'react' 

function Card() {
    const [hand, setHand] = useState([])

    const num = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"]
    const sem = ["\u2660", "\u2665", "\u2666", "\u2663"]

    const drawCard = () => {
        const n = Math.floor(Math.random() *100) % 52
        setHand(prev => [...prev, {id : n, number : num[n%13], type : sem[Math.floor(n/13)]}])
    }
    
    const drawHand = (event) => {
        setHand([])
        event.preventDefault()
        for (let i=0; i<8; i++) {
           drawCard()
        }
    }

    const deleteAll = (event) => {
        event.preventDefault()
        setHand([])
    }

    return (
        <div className="component-div">
            <form>
                <button className="pageSelector selected" style={{marginTop:"25px"}} onClick={drawHand}>Draw Hand</button>
                <button className="pageSelector variant" style={{marginTop:"25px"}} onClick={deleteAll}>Delete</button>
            </form>
        <ul >
            {   
                hand.length > 0 &&
                hand.map(item => {
                    return (
                        item.id !== -1 &&
                        <div style={{float:"left"}} className="mycard">
                            <div className="line">
                                <div className="child-1">
                                    {item.type} 
                                </div>
                                
                                <div className="child-2">
                                    {item.type}
                                </div>

                                <div className="child-number">
                                    {item.number}
                                </div>
                        
                                <div className="child-3">
                                    {item.type}
                                </div>
                                
                                <div className="child-4">
                                    {item.type}
                                </div>
                            </div>
                        </div>
            
                    )
                })
        
            }
        </ul>
        </div>
    )
}

export default Card