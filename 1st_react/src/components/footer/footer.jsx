import './footer.css';
function Footer() {
    const result = document.querySelector("#result").textContent;
    return(
            <footer id ="footer">
                <span>result = {result}</span> 
            </footer>
    );
}
export default(Footer);