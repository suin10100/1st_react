import { useState } from 'react';
import './header.css';
export default () => {
    let [time, setTime] = useState(new Date());
    setInterval(() =>{
        setTime(new Date());
    }, 1000)
    return (
        <header id="header">
            <span>
                {`${time}`}
            </span>
        </header>
    )
}