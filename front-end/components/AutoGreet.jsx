import React from 'react'

const AutoGreet = () => {
    const day = new Date();
    const hourNow = day.getHours();

    let greet = ''

    if ((hourNow > 18) && (hourNow < 24)) {
        greet = "๐ค Bonsoir";
    }   else if ((hourNow > 12) && (hourNow < 18))  { 
        greet = "๐ Bon aprรจs-midi";
    }   else if ((hourNow > 0) && (hourNow < 13))  {
        greet = "๐๐ฝ Bonjour";
    } else {
        greet = " Bienvenue"
    }
    return (
        <div>
            {greet}
        </div>
    )
}

export default AutoGreet;