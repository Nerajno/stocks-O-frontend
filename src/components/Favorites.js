import React,{useEffect, useState} from "react";


function FavoritesData({ticker,standardName,lastPrice,percentChange}){
    return(
        <table className="table">
                
                <tbody>
                    
                    <th scope="row">{ticker}</th>
                    <td>{standardName}</td>
                    <td>{lastPrice}</td>
                    <td>{percentChange}</td>
                    
                </tbody>
        </table>
    )
}

function Favorites({ticker,standardName,lastPrice, percentChange}){
    
    const [stocksData, setstocksData]= useState([]);
        

        useEffect(()=>{
            getStocks()
        },[]);

    
        const getStocks=(FAVORITES)=>{
            fetch("https://morning-star.p.rapidapi.com/market/v2/get-movers", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "607c356a15msh664378701f6febfp170069jsn3c9f418ebaf0",
                    "x-rapidapi-host": "morning-star.p.rapidapi.com"
                }
                
        })
        .then((res)=>res.json())
        .then(data => {
            console.log(data.actives);
            setstocksData(data.actives);
            
        })
        .catch(err => {
            console.error(err);

        });
    }
        


        
        
    return(
        <div>
            {stocksData.length > 0 &&  stocksData.map((stocks)=>
                <FavoritesData key ={stocks.id}{...stocks}/>
            )}
        </div>

            
    
        
        
    )
       
};

   


export default Favorites;