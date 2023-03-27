import { useState } from "react"

export default function Accordion({
    term,
    code,
    title,
    credits,
    description
}){
    const [isActive, setIsActive] = useState(false);

    return(
        <>
            Term: {term}

            <div onClick={() => setIsActive(!isActive)}> 
                {code}
                {title}
                {credits}
            <div>{isActive ? '▲' : '▼'}</div>
            </div>

            {isActive && <div>{description}</div>}
        </>
    )
}