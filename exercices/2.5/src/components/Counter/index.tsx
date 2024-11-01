import {useState} from "react"
export interface props{ 
    titre:string;
    message:string;
    hoverMessage:string;
}
export const ClickCounter= ({titre, message, hoverMessage}:props)=>{
    const [count, setCount] = useState(0);
    const [hovered, sethovered] = useState(false);
    

    return(
        <div className="card">
            <h3>{titre}</h3>
            <p>{hovered ? hoverMessage : null}</p>
            <button 
                onClick={() => setCount((count) => count + 1)} 
                onMouseEnter={() => sethovered(true)}
                onMouseLeave={() => sethovered(false)} 
            >

                count is {count}
            </button>  
            <p>{count>=10 ? `${message} rien !` : message}</p>  
        </div>
    
        
    );
}