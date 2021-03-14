import React from "react";



const Favorites=({standardName,lastPrice})=>(
        <>
        <h3>My Positions</h3>
        <table class="table">
  <tbody>
    <tr>
      <th scope="row">F</th>
      <td>{standardName}</td>
      <td>graph</td>
      <td>{lastPrice}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
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