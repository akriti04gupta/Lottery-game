import TicketNum from "./TicketNum";
export default function Ticket({ticket})//we are passing an array named ticket
{
    return(
        <div>
            {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>))}
        </div>
    )

}