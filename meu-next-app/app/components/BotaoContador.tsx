"use client";

import { useState } from "react";

export default function BotaoContador(){
    const [count, setCount] = useState(0);

    return(
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={()=> setCount(count + 1 )}
        >
            Cliquei {count} vezes
        </button>
    );
}