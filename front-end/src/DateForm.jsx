import Moment from 'moment';
import DateInputs from './DateInputs';

function InputButton() {
    return (
        <>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
        </>
    );
}
  
function Divider() {
    return (
        <>
        <div className="divider">
            <hr />
            <InputButton />
        </div>
        </>
    )
}

// To-do:
//  Calculation
function Result({display, idName}) {
    return (
        <li id={idName}>
            <span>--</span> {display}
        </li>
    );
}
  
function Results() {
    return (
        <ul className="container results">
            <Result 
                display={"years"}
                idName={"years-res"} 
            />
            <Result 
                display={"months"}
                idName={"months-res"}
            />
            <Result 
                display={"days"} 
                idName={"days-res"}
            />
        </ul>
    );
}

export default function DateForm() {
    let handleSubmit = (e) => {
        e.preventDefault();

        let day = e.target.day.value;
        let month = e.target.month.value;
        let year = e.target.year.value;

        let date = Moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        console.log(date.isValid());
        console.log(date.month());

        // To-do:
        // May need to update results and input here when handling the event
        // return the result to be rendered
        // look into states


        return date.isValid();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <DateInputs />
            <Divider />
            <Results />
        </form>
    );
}