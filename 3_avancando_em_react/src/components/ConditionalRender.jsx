import React from 'react'

function ConditionalRender() {
    const x = true;

    const name = "Matheus"

    return (

        <div>
            {        /* 7 Render condicional */}
            <h3>
                Isso será exibido?
            </h3>
            {x && <p>
                Se x for true sim!
            </p>}

            {/*8 Else */}
            {name === "João" ? (
                <div>
                    <h3>
                        Olá João
                    </h3>
                </div>) : (<div>
                    <h3>Nome não encontrado</h3>
                </div>)
            }
        </div>
    )
}

export default ConditionalRender