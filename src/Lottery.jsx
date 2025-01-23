import { useState } from "react"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winingSum})
{
    let [ticket,setTicket]=useState(genTicket(n));
    let isWining = sum(ticket)=== winingSum;
    let buyTicket= ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket"></div>
            <Ticket ticket={ticket}/>
            <br></br><br></br>
            <button onClick={buyTicket}>Buy ticket</button>
            <h3>{isWining && "Congo u won"}</h3>
        </div>
    )
}