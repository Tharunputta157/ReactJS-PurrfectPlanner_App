
import { useState } from "react"
import Axios from 'axios';

export const Catfact = () =>{
    const [fact, setFact] = useState('')
    const handleClick=()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setFact(res.data.fact)

        }
     ) 
     

    }
    return(
        <div class="catfact">
            <div class= "fact"> Brighten your day with fun and random cat facts at the click of a button</div>
            <button class="catbutton" onClick={handleClick}>fact</button>
            <p>{fact}</p>

        </div>
        
    )

}