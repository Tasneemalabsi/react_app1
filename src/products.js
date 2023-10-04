import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import CardComp from "./card";

function Products () {
    let [items, setItems] = useState([])

    async function getData(){

        const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '0f2abd4395msh6ce1c28ccac1aacp178ddbjsn9cd63c10ba80',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
          }
        };
        
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result)
          setItems(result.results) 
    }

    async function handleChange(event){
    let changedValue = event.target.value
        
    const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.APIKEY}`,
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };
    
      const response = await fetch(url, options);
      const result = await response.json();

if(changedValue==="all"){
    console.log(changedValue)
    setItems(result.results)
}
else{
    console.log(changedValue)
    let filteredItems = result.results.filter(function(item){return item.price.value>changedValue-10 && item.price.value<=changedValue})
    setItems(filteredItems)
}
}

    useEffect(()=>{getData()},[]);

let prices = [10,20,30,40,50,60,70,80,90,100]

    return (
        <>
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option value="all">All</option>
    {prices.map(function(price){
        return <option value={price}>{price-10}$ - {price}$</option>
    })}
    </Form.Select>
    <div className="cardcontainer">
    {items.length !== 0 ?items.map(function(item){
            return(
              <>
                <CardComp image={item.images[0].baseUrl} title={item.name} price={item.price.value} showFavorites={true}/>
                </>
            )
        }):<h3>No results</h3>}
        </div>
        </>
    )
}

export default Products;