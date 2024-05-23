import Card from "./Card";
import React from "react";

function Tours({tours, removeTour}) {
    return(
        <div className="container">

            <div>
                <h2 className="title">Plan with Vivek</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>        
    )
}

export default Tours;