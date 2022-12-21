import { useSelector, useDispatch } from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice'
function Counter() {
    const count = useSelector((state) => state.counterme.count)
    const themeTextColor = useSelector((state) => state.theme.color)
    const dispatch = useDispatch()

    const incrementtheamount = () => {
        const num1 = parseInt(prompt("Enter the number"));
        if (!num1) {
            parseInt(prompt("Please enter a number"));
        } else {
            dispatch(incrementByAmount(num1));
            alert("The number has been increased by " + num1);
        }
    }

    const decrementtheamount = () => {
        const num2 = parseInt(prompt("Enter the number"));
        if (!num2) {
            parseInt(prompt("Please enter a number"));
        } else {
            dispatch(decrementByAmount(num2));
            alert("The number has been decreased by " + num2);
        }
    }


    return (
        <div>
            <button className="button" aria-label="Increment value" onClick={() => { dispatch(increment()) }}> + </button>

            <span className="value" style={{ color: themeTextColor }}>Count: {count}</span>

            <button className="button" aria-label="Decrement value" onClick={() => { dispatch(decrement()) }}> - </button><br /><br />

            <button className="button ml" onClick={incrementtheamount}> Increment by number entered </button><br /><br />

            <button className="button ml" onClick={decrementtheamount}> Decrement by number entered </button>
        </div>
    )
}

export default Counter
