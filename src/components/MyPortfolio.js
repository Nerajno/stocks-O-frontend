import React from "react";
function MyPortfolio(){
    return(
        <div className="my_portfolio">
            <div className= "portfolio_header">
                <ul>
                <li>
                    Portfolio Value:$10000.00
                </li>
                <li>
                    Net P&L : $-30.25
                </li>
                <li>
                    Cash Balance :$50.00
                </li>
                </ul>
            </div>
            <div>
                <button className="quickTrade"> Quick Trade</button>
                <button className="performance"> Performance</button>
            </div>
            <div>
                <h1>My Positions</h1>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Quantity</th>
      <th scope="col">Market Value</th>
      <th scope="col">Last/Average Price</th>
      <th scope="col">Profit/Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >
          <li className="portfolioList">BTG</li>
          <li className="portfolioList">B2Gold</li>
      </td>
      <td>100</td>
      <td>482.00</td>
      <td>
          <li className="portfolioList">4.820</li>
          <li className="portfolioList">4.620</li>
      </td>
      <td> 
          <li className="portfolioList">+25.00</li>
         <li className="portfolioList">+4.33%</li> 
          </td>
    </tr>
   
  </tbody>
</table>

            </div>

        </div>
    )
}
export default MyPortfolio;