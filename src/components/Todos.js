import React, {useState, useEffect} from 'react'

const Todos = () => {
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])
    const [textSearch, setTextSearch] = useState("") 

    let filtered
    todos ? filtered = todos.filter(item => item.title.toLowerCase().includes(textSearch.toLowerCase())) : filtered = null

    useEffect(()=> {
        setTodos(JSON.parse(window.localStorage.getItem('todos')))
    }, [])

    useEffect(()=> {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const getId = () => {
        if (todos.length === 0) return 1
        let x = todos[0].id
        for (let i=1; i<todos.length; i++) {
            if (todos[i].id > x) x = todos[i].id
        }
        return x+1
    }

    const saveState = (event) => {
        event.preventDefault()
        if (title === "") {
            alert("Inserisci qualcosa cretino")
        } else {
            setTodos(prev => [...prev,{id: getId() , title :(title.charAt(0).toUpperCase() + title.slice(1)), state: true}])
            setTitle("")        
        }    
    }

    const removeTodo = (x) => {
        const confirm = window.confirm("Do you really want to remove this?")
        if (confirm) {
            setTodos(prev => {
                return prev.filter(element => x !== element.id)
            })
        }
    }

    //rimuove elemento da todos se checkbox è checked
    const handleCheckbox = (x) => {
        setTodos(prev => {
            return prev.map(element => element.id === x ? {...element, state:!element.state} : element)
        })
    }

    return (
        <div className="component-div">
            <h1 className="header" style = {{textAlign: "center"}}>This is my to do list</h1>
            <form>
                <input style = {{backgroundColor: "#CFFFB0", padding: "15px 10px", boxShadow:"3px 3px 3px black"}} type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <button onClick={saveState} className="pageSelector selected" style={{boxShadow:"3px 4px 3px black", marginLeft: "5px", padding: "15px 15px"}} >Add todo</button>              
            </form>

            <form style={{textAlign:"left", marginLeft:"10px"}}>
                <input type="text" placeholder="Search to do..." className="input" onChange={(e) => setTextSearch(e.target.value)} value={textSearch}></input>
            </form>

            {
                todos.length > 0 && filtered.length > 0 ? <h2 className="header" >To do's:</h2> : todos.length === 0 ? <h2 className="header">Rigth now the list is empty :( </h2> : <h2 className="header">No match found</h2>
            }
    
            <ul className="myUL">
                {
                    filtered.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <li className={`ul-element ${todo.state === false ? " deleted" : ""}`}>
                                    {todo.title}
                                    <input className="myCheckbox" onChange={() => handleCheckbox(todo.id)}type="checkbox"></input>
                                    <button className="removeButton" onClick={() => removeTodo(todo.id)}>Delete</button>
                                </li> 
                                
                            </div>
                        )
                    })
                }
            </ul>


            {
                todos.length > 0 && filtered.length > 0 && <button onClick={() => {setTodos([])}} className="pageSelector variant">Delete all</button>
            }
            
        </div>
    )
}

export default Todos