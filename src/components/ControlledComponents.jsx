import { useState } from "react"



export default function ControlledComponents () {
    const [firstName, setFirstName]= useState()
    return (
        <>
        <h2>Controlled Components</h2>
        <p>Form fields in HTML typically manage their own state.</p>
        <p>In a <strong>controlled component </strong>we let the React 
        component take control of that state using <code>value </code> and
        <code> onChange</code>.</p>
        <h3>You typed: {firstName} </h3>
        <label htmlFor="firstName">First Name: </label>
        <input name="firstName" type= 'text' 
        onChange={e => setFirstName(e.target.value)}
        />
        </>
    )
}