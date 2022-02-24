import React from "react";
// Route comes from our react router package and dictates what component is show from the link clicked
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { TicketList } from "./serviceTickets/TicketList";
import { Ticket } from "./serviceTickets/Ticket";
import { Employee } from "./employees/Employee";
// set a function that acts like an event listener
export const ApplicationViews = () => {
    // when someone clicks on the customer link it displays the CustomerList componenet on the DOM
    // Route is tied to Link. Link creates the HTML link and Route ties that to a custom component
    return (
        <>  
            <Route exact path="/customers">
                <h2>Customers</h2>
                <CustomerList/>
            </Route>
            <Route exact path="/employees">
                <h2>Employees</h2>
                <EmployeeList/>
            </Route>
            <Route exact path="/tickets">
                <h2>Tickets</h2>
                <TicketList/>
            </Route>
            <Route path="/tickets/create">
                <h2>Tickets</h2>
                <TicketForm/>
            </Route>
            <Route path="/ticket/create">
                <TicketForm />
            </Route>
            <Route path="/employee/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
        </>
    )
}