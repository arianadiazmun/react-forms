export default function FormSubmit () {
    const handleForm = (e) => {
        e.preventDefault() //stops form from refreshing the page
        const make = e.target.make.value
        const model = e.target.model.value  
        const year = e.target.year.value
        if(!year || !make || !model)return
        alert(`You submitted a ${year} ${make} ${model}.`)
        e.target.make.value = ''
         e.target.model.value = ''
         e.target.year.value = ''
    }
    return (
        <>
        <h2>Get Values on Form Submit</h2>
        <p>Most of the time we only need the form Values 
            once the form is submitted.
        </p>
        <form onSubmit={handleForm} 
         style= {{
            borderColor:'red',
            borderWidth: 2,
            borderStyle: 'solid',
            padding: '1em' }}>
            <label htmlFor="make">Make: 
            <input type = "text" name= "make"/>
            </label>
            <label htmlFor="model">Model: 
            <input type = "text" name= "model"/>
            </label>
            <label htmlFor="year">Year: 
            <input type = "text" name= "year"/>
            </label>
<input type="submit" value="Save Vehicle"/>
        </form>
        </>
    )
}