import { useState } from "react";

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

    return (
        <div>
            <p>
                Valor: {someData}
                <button onClick={() => (someData = 15)}>
                    Mudar varivável
                </button>
            </p>

            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(20)}>
                    Mudar state
                </button>
            </div>
        </div>
    )
}

export default Data