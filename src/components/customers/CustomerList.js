import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

// useState returns an array so it can only take an array as an argument
    //* "const []" deconstructs an array
    // the first variable holds the state and the second hold the function to modify said state
    // can take 2 arguments, a function and an array
            // normal fetch call to get our data from our api
export const CustomerList = () => {
    // initialization of array is a state change
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    // useEffect is how we fetch the data we need to present on the dom
    useEffect(
        () => {
            console.log("Initial useEffect")
            getAllCustomers()
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },[]
    )
    
    // checks the length of the array to print a string of how many customers we have
    useEffect(
        () => {
            console.log("Customers state changed")
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },[customers]
    )
    
    //return statement to display our component
    return (
        <>
        <div>
            {totalCustomerMessage}
        </div>
        {customers.slice(0, 5).map((customerObject) => {    // will only show 5 of our customers
            return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
        })}
        </>
    )

}