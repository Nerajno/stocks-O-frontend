import React,{useEffect, useState} from "react";


function FavoritesData({price,change_point,change_percentage,...rest}){
    console.log({price,change_point,change_percentage,rest});
    return(
        <div>
            <div>Price:{price}</div>
            <div>Profit/loss:{change_point}</div>
            <div>Percent Change:{change_percentage}</div>
        </div>
    )
}

function Favorites({price,change_point, change_percentage}){
    
    const [stocksData, setstocksData]= useState({});
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
            console.log(typeof data);
            setstocksData(JSON.parse(data)); 

        })
        .catch(err => {
            console.error(err);
        });
    }
       if(!stocksData) return null          
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
                {Object.keys(stocksData).length > 0 && (
                <FavoritesData{...stocksData} />)
            }
        </div>   
    )       
};

export default Favorites;

