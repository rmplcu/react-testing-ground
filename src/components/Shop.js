import React, {useState, useEffect} from 'react'


const els = [
    {
        id : 1,
        name: "Hoover",
        price : '20000',
        numEl: 0
    }, 

    {
        id : 2,
        name: "Nike",
        price : '200',
        numEl: 0
    }, 

    {
        id : 3,
        name: "Gnu",
        price : '15',
        numEl: 0
    }, 

    {
        id : 4,
        name: "Fire dragon",
        price : '1000',
        numEl: 0
    }
]

function Shop() {
    const [text, setText] = useState("") 
    const [elements, setElements] = useState(els)
    const [total, setTotal] = useState(0)
    
    const [newname, setNewname] = useState("")
    const [newprice, setNewprice] = useState("")

    const filtered = elements.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    

    useEffect(()=>{
        let tot = 0
        elements.forEach(value => tot += value.numEl * value.price)
        setTotal(tot)
    }, [elements])

    const getId = () => {
        if (elements.length === 0) return 1
        let x = elements[0].id
        for (let i=1; i<elements.length; i++) {
            if (elements[i].id > x) x = elements[i].id
        }
        return x+1
    }

    const addEl = (event) => {
        event.preventDefault()
        setElements(prev => [...prev, {id:getId(), name: newname, price:newprice, numEl:0}])
        setNewname("")
        setNewprice("")
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handlePlus = (id) => {
        setElements(prev => prev.map(item => item.id === id ? {...item, numEl: item.numEl+1} : item))
    }

    const handleMinus = (id) => {
        setElements(prev => prev.map(item => item.id === id && item.numEl >0 ? {...item, numEl: item.numEl-1} : item))
    }

    const handleClear = (id) => {
        setElements(prev => prev.map(item => item.id === id ? {...item, numEl:0} : item))
    }

    const clearAll = () => {
        setElements(prev => prev.map(item => true && {...item, numEl:0}))
    }
    
    return(
        <div className="component-div">
            <form className="form" >
                <div style={{marginTop:"10px"}}>
                    <input onChange={(e)=>setNewname(e.target.value)} type="text" placeholder="New object" value={newname}></input> 
                    <input onChange={(e)=>setNewprice(e.target.value)} type="text" placeholder="Price" value={newprice}></input>
                    <button onClick={addEl} className="searchButton" style={{backgroundImage: "none", padding:"5px 5px"}}>Add</button>
                </div>
                
            </form>

            <form className="form">
                <input className="input" type="text" placeholder="Search.." onChange={(e) => handleText(e)} value={text}></input>
            </form>

            <div style={{textAlign:"left"}}>
                <h3 className="myElement" style={{marginLeft:"10px"}}>Total price : {total + " $"} </h3>
                <button onClick={clearAll} className="pageSelector variant">Clear total</button>
            </div>
            

            <ul className="myUL">
                {
                    filtered.map(item => {
                        return (
                            <div key={item.id} className="myElement" style={{marginLeft:"50px"}}>
                                {item.name} {"- " + item.price + "$ - "} 
                                {"Amount: " + item.numEl}
                                <button className="button plusButton" style ={{marginRight: "5px"}} onClick={() => handlePlus(item.id)}>+</button>
                                <button className="button minusButton" style ={{marginLeft: "5px", marginRight:"50px"}} onClick={() => handleMinus(item.id)}>-</button>    
                                <button className="button clearButton" style ={{marginRight: "50px"}} onClick={() => handleClear(item.id)}>Clear</button>
                            </div>
                        )
                    })
                }
            </ul>

            

        </div>
    )
}

export default Shop