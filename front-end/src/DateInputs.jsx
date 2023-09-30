function Input({display, inputName, length=4, children = null}) {
    return (
      <li className="container">
        <label className={children ? "error" : ''} htmlFor={inputName}>{display}</label>
        <input className={children ? "error" : ''} type="number" maxLength={length} id={inputName} name={inputName}></input>
        {children}
      </li>
    );
  }
  
export default function DateInputs({    isEmpty,
                                        badInput,
                                        invalid
                                    }) {
    let getError = (name)=> {
        return (
            isEmpty ? 
                <span className="errorMessage">{"This field is required"}</span> :
            badInput ?
                <span className="errorMessage">{name !== 'year' ? 
                                            `Must be a valid ${name}` :
                                            "Must be in the past"}</span> :
            invalid ? 
                <span className="errorMessage">{"Must be a valid date"}</span> :
                null
        );
    }

    return (
        <ul className="container">
            <Input 
                display= {"day"}
                inputName= {"day"}
                length= {2}
            >
                {getError("day")} 
            </Input>
            <Input 
                display= {"month"}
                inputName= {"month"}
                length= {2}
            >
                {getError("month")} 
            </Input>
            <Input 
                display={"year"}
                inputName={"year"}
                length= {9}
            >
                {getError("year")} 
            </Input>
        </ul>
    );
}