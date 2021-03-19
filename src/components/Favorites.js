import React,{useEffect, useState} from "react";


function FavoritesData({price,change_percentage}){
    return(
        <div>
            <div>Price:{price}</div>
            <div>Percent Change:{change_percentage}</div>
        </div>
        // <table className="table">
                
                
                
        //         <tbody>
                    
        //             <th scope="row">TESLA</th>
                    
        //             <td>{price}</td>
        //             <td>{change_percentage}</td>
                    
        //         </tbody>
        // </table>
    )
}

function Favorites({price, change_percentage}){
    
    const [stocksData, setstocksData]= useState([]);
        

        useEffect(()=>{
            getStocks()
        },[]);

    
        const getStocks=(FAVORITES)=>{
            fetch("https://realstonks.p.rapidapi.com/TSLA", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "607c356a15msh664378701f6febfp170069jsn3c9f418ebaf0",
                "x-rapidapi-host": "realstonks.p.rapidapi.com"
            }
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data);
            setstocksData(data);
            
        })
        .catch(err => {
            console.error(err);

        });
    }
        


        
        
    return(
        <div>
            {/* <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Company</th>
                    <th scope="col">Last Price</th>
                    <th scope="col">Open P&L</th>
                    </tr>
                </thead>
                </table> */}
            {stocksData.length > 0 && [stocksData].map(stocks=>
                <FavoritesData key ="{stocks}"{...stocks}/>
            )}
        </div>

            
    
        
        
    )
       
};

   


export default Favorites;