import React from "react";


<h3>My Positions</h3>
const Favorites=({ticker,standardName,lastPrice, percentChange})=>(
        <>
        <table class="table">
                
                <tbody>
                    <tr>
                    <th scope="row">{ticker}</th>
                    <td>{standardName}</td>
                    <td>{lastPrice}</td>
                    <td>{percentChange}</td>
                    </tr>
                    
                </tbody>
        </table>
 </>       
    );

   

{/* <div>
            <p>{standardName}</p>
            <p>{lastPrice}</p>
        </div> */}
export default Favorites;