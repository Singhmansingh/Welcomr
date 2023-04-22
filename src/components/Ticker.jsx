import {useState} from 'react';

export default function Ticker(props){
    const [tickValue, setTickValue] = useState(0);
    const MAXVALUE = props.max || 10;
    const MINVALUE = props.min || 0;
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

    const decreseId = (Math.random() + 1).toString(36).substring(10);
    const increaseId = (Math.random() + 1).toString(36).substring(10);

    return (
        <div className="ticker-container">

            <label for={decreseId} style={{fontSize: 0}}>{props.tickerFor} Total {parseInt(tickValue)} tickets. Remove 1 Ticket</label>
            <button id={decreseId} type="button" onClick={decrease}>-</button>
            <label for={props.id} style={{fontSize: 0}}>{parseInt(tickValue)} {props.tickerFor}</label>
            <input type="number" max={MAXVALUE} min={MINVALUE} name={props.name} id={props.id} onChange={manualInput} value={parseInt(tickValue)}/>
            <label for={increaseId} style={{fontSize: 0}}>{parseInt(tickValue)} {props.tickerFor} Total {parseInt(tickValue)} tickets. Add 1 Ticket</label>
            <button id={increaseId} type="button" onClick={increase}>+</button>
        </div>
    )
}