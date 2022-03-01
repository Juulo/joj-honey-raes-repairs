import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getTicketList } from "../ApiManager"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    
    useEffect(
        () => {
            getTicketList()
                .then((ticketArray) => {
                    updateTickets(ticketArray)
                })
        },[]
    )

    useEffect(
        () => {},[tickets]
    )
    
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                        .then(res => res.json())
                        .then((ticketArray) => {
                            updateTickets(ticketArray)
                })
                }
            )
    }

    return (
        <>
        <div>
            <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
        </div>
        {tickets.map((ticketObject) => {
            return <div key={`ticket--${ticketObject.id}`}>
                <p className={ticketObject.emergency ? "emergency" : `ticket`}>
                {ticketObject.emergency ? "🚑" : ""} <Link to={`/tickets/${ticketObject.id}`}>{ticketObject.description}</Link> submitted by {ticketObject.customer.name} 
                and worked on by {ticketObject.employee.name}</p>
                <button onClick={() => {
                    deleteTicket(ticketObject.id)
                }}>Delete</button>
            </div>
            
        })}
        </>
    )

}