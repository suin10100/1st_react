import './calc.css';
function calc() {
    return (
        <div id="calc_container">
            <div id="result_container">
                <div id="result">
                    0123456789
                </div>
            </div>

            <div id="btn">
                <div className='funtional'>%</div>
                <div className='funtional'>*</div>
                <div className='funtional'>/</div>
                <div className='funtional'>-</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div id="plus" className='funtional'>+</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div id="equals" className='funtional'>=</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div id="zero">0</div>
                <div className='funtional'>.</div>
            </div>
        
        </div>
       
    );
}

export default calc;