function Input({display, inputName, children = null}) {
    return (
      <li className="container">
        <label htmlFor={inputName}>{display}</label>
        <input type="number" id={inputName} name={inputName}></input>
        {children}
      </li>
    );
  }
  
  // To-do:
  //  Submit data into calculation
  //  Responsiveness
export default function DateInputs({    validDay = {isValid : true}, 
                                        validMonth = {isValid : true}, 
                                        validYear = {isValid : true}
                                    }) {
    return (
        <ul className="container">
            <Input 
                display={"day"}
                inputName={"day"}
            >
                {!validDay.isValid && <p>Day must be valid</p>} 
            </Input>
            <Input 
                display={"month"}
                inputName={"month"}
            >
                {!validMonth.isValid && <p>Month must be valid</p>} 
            </Input>
            <Input 
                display={"year"}
                inputName={"year"}
            >
                {!validYear.isValid && <p>Year must be in the past</p>} 
            </Input>
        </ul>
    );
}