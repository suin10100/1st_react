import './footer.css';
import {useEffect, useState} from "react"
function Footer() {
    let [result, setResult] = useState(null);

    useEffect(() => {
        setResult(document.querySelector("#result").textContent);
    })  
    
    useEffect(() => {
        console.warn("Hi");
    }, result)
    
    return(
            <footer id="footer">
                <span>
                    {
                        result == null
                        ? "result is not loaded"
                        : result
                    }
                </span>
            </footer>
    );
}
export default Footer;