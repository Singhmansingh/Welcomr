import {useState} from 'react';

export default function Ticker(){
    const [tickValue, setTickValue] = useState(0);
    const MAXVALUE = 10;
    const MINVALUE = 0;
    function increase(){
        if(tickValue >= MAXVALUE) return;
        setTickValue(parseInt(tickValue) + 1);
    }
    function decrease(){
        if(tickValue <= MINVALUE) return;
        setTickValue(parseInt(tickValue) - 1);
    }
    function manualInput(e){
        var value = parseInt(e.target.value);
        if(value > MAXVALUE || value < MINVALUE) return;
        setTickValue(value);
    }
    return (
        <div className="ticker-container">
            <button type="button" onClick={decrease}>-</button>
            <input type="number" onChange={manualInput} value={parseInt(tickValue)}/>
            <button type="button" onClick={increase}>+</button>
        </div>
    )
}