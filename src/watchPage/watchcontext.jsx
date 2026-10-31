import { createContext, useState, useEffect } from "react";
import { auth } from "../Sign&Login/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const WatchContext = createContext();

function load(key) {



    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

export function WatchProvider({ children }) {

    const [user, setuser] = useState(null);
    const [authloading, setauthloading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setuser(u);
            setauthloading(false);
        });
        return unsubscribe;
    }, [])

    const [index, setindex] = useState(() =>
        load("wishlist")

    );
    const [cardindex, setcardindex] = useState(() =>
        load("cart")

    );


    useEffect(() => {
        localStorage.setItem("index", JSON.stringify(index))
    }, [index])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cardindex))
    }, [cardindex])

    const [filters, setfilters] = useState([]);
    const [straps, setstraps] = useState([]);
    const [minprice, setminprice] = useState(0);
    const [maxprice, setmaxprice] = useState(30000)

    function addindex(i) {
        setindex((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
    }

    function removeindex(i) {
        setindex((prev) => prev.filter((x) => x !== i))
    }

    function addCartIndex(i, qty = 1) {
        setcardindex((prev) => {
            const found = prev.find((x) => x.id === i);
            if (found) {
                return prev.map((x) => (x.id === i ? { ...x, qty: x.qty + qty } : x));
            }
            return [...prev, { id: i, qty }]
        });
    }

    function changeQty(id, change) {
        setcardindex((prev) =>
            prev.map((x) => (x.id === id ? { ...x, qty: x.qty + change } : x))
                .filter((x) => x.qty > 0));
    }



    function removeCartIndex(pos) {
        setcardindex((prev) => prev.filter((_, i) => i !== pos))
    }

    function handleCheck(cat) {
        setfilters((prev) => prev.includes(cat) ? prev.filter((x) => x !== cat) : [...prev, cat])
    }

    function handleStrap(type) {
        setstraps((prev) => prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type])
    }

    return (<>
        <WatchContext.Provider value={{ index, addindex, removeindex, addCartIndex, cardindex, removeCartIndex, setcardindex, filters, setfilters, handleCheck, straps, handleStrap, minprice, maxprice, setmaxprice, changeQty, user, authloading }}>

            {children}

        </WatchContext.Provider>
    </>)
}


