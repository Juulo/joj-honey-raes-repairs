import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const Employee = () => {
    const [employee, assignEmployee ] = useState({})
    const { employeeId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    assignEmployee(data)
                })
        }
        ,[ employeeId ]
    )

    return(
        <>
            <h2>Employee Info</h2>
            <section className="employee">
                <div className="employee_specialty">Specializes in {employee.specialty}</div>
            </section>
        </>
    )
}