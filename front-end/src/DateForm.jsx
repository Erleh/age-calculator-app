import { useState } from "react";
import Moment from 'moment';
import DateInputs from './DateInputs';
import { useSpring, animated } from '@react-spring/web';

// Input button for form
function InputButton() {
    return (
        <>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
        </>
    );
}

// Divider for the card
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

// Component for individual result value
function Result({display, idName, children}) {
    return (
        <li id={idName}>
            <span>{children}</span> {display}
        </li>
    );
}

// Component representing results grouped
function Results({changed, days, months, years}) {
    return (
        <ul className="container results">
            <Result 
                display={"years"}
                idName={"years-res"} 
            >
                {changed ? years : "--"}
            </Result>
            <Result 
                display={"months"}
                idName={"months-res"}
            >
                {changed ? months : "--"}
            </Result>
            <Result 
                display={"days"} 
                idName={"days-res"}
                result={days}
            >
                {changed ? days : "--"}
            </Result>
        </ul>
    );
}

// Component to represent date input form
export default function DateForm() {
    // Init state
    let [changed, setChanged] = useState(false);
    let [isEmpty, setIsEmpty] = useState(false);
    let [badInput, setBadInput] = useState(false);
    let [invalid, setInvalid] = useState(false);

    // Init react spring to handle animation of numbers
    const [springs, api] = useSpring(() => ({
        from: { 
            days: 0,
            months: 0,
            years: 0 
        },
        config: { 
            mass: 1, 
            tension: 50, 
            friction: 10 
        }
    }));

    // handler for form submission
    let handleSubmit = (e) => {
        e.preventDefault();

        let day = e.target.day.value;
        let month = e.target.month.value;
        let year = e.target.year.value;

        // Check if empty
        if (day === '' || month === '' || year === '') {
            setIsEmpty(true);
            return;
        }

        // !empty => Reset empty state
        setIsEmpty(false);

        // Momentjs dates set
        let date = Moment(`${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
        let currentDate = Moment();

        // Check for bad input -> invalid year|month|day
        if (isNaN(date.year()) || isNaN(date.month()) || isNaN(date.day()) || !date.isBefore(currentDate)) {
            setBadInput(true);
            return;
        }

        // !BadInput => reset badInput state
        setBadInput(false);

        // Check if date itself is invalid
        if (!date.isValid()) {
            setInvalid(true);
            return;
        }
        console.log(date.isValid());
        console.log(date.date());

        // valid => Reset Invalid state
        setInvalid(false);

        // Set state to allow change result values, this state is just a one way toggle
        setChanged(true);

        // Date difference found here
        let dayDiff = currentDate.date() > date.date() ? 
            currentDate.date() - date.date() : date.date() - currentDate.date();
        let monthDiff = currentDate.month() > date.month() ? 
            currentDate.month() - date.month() : date.month() - currentDate.month();
        let yearDiff = currentDate.date() > date.date() ? 
            currentDate.year() - date.year() : date.year() - currentDate.year();
        
        // Tells animation to start from -> to
        api.start({
            from: {
                days: 0,
                months: 0,
                years: 0
            },
            to: {
                days: dayDiff,
                months: monthDiff,
                years: yearDiff
            }
        });
    }

    return (
        <form onSubmit={ handleSubmit }>
            <DateInputs 
                isEmpty={isEmpty}
                badInput={badInput}
                invalid={invalid}
            />
            <Divider />
            <Results
                changed = { changed }
                days={
                    <animated.span>{springs.days.to(val => val.toFixed(0))}</animated.span>  
                } 
                months={
                    <animated.span>{springs.months.to(val => val.toFixed(0))}</animated.span>
                } 
                years={
                    <animated.span>{springs.years.to(val => val.toFixed(0))}</animated.span>
                }/>
        </form>
    );
}