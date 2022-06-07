import React from 'react'
import { useState } from 'react'

const BotonCounter = ( props ) => {

  
    const [count, setCount] = useState(props.initial)
    const minusHandler = () => { 
       if (count > 1){
            setCount(count-1)
        }
    }
    const addHandler = () => { 
       
       if (count<props.stock){
           setCount(count + 1)
       }
    }
    
    return (
        <>
          <button className="btn" onClick={minusHandler}>-</button>
          <strong className="p-3">{count}</strong>
          <button className="btn" onClick={addHandler}>+</button>
          <div>
              <button onClick={() => props.onAdd(count)} className="btn primary p-2 m-2">Agregar al carrito</button>
          </div>
        </>
    )
}
   
export default BotonCounter