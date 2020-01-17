// import useLocalStorage from './useLocalStorage'
import {useEffect, useState} from 'react'

const useDarkMode = () => {
    const [someValue, setSomeValue] = useState("");

    useEffect (()=>{
        someValue ? document.querySelector(".App").classList.add("darkMode") : document.querySelector(".App").classList.remove("darkMode")
    },[someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode