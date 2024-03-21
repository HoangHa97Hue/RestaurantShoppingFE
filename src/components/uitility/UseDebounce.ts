import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, delay:number = 500)=>{
    const [debounceValue, setValueData] = useState<T>(value);
    useEffect(()=>{
        const handler = setTimeout(() => {
            setValueData(value);
        }, delay);
        return (() => clearTimeout(delay));  // clean up function clears the timer when the component unmounts or when the dependencies change.
    },[value])//If value changes before the setTimeout callback is executed, the cleanup function returned by useEffect will be called first, clearing the existing timer.
    //Then, a new setTimeout is set up with the updated value.

    return debounceValue;
};