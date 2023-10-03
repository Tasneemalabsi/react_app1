import CardComp from './card';
import './main.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main (){
    let [items, setItems] = useState([]);

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
      console.log(result.results)
      setItems(result.results) //all the data that comes from the api
    
}

// async function getMealsData(){
//   let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
//   let data = await response.json();
//   setMeals(data.meals)

// }


useEffect(function (){
  
  getData();

}, [])

    async function handleSubmit (event){
        event.preventDefault()
        let searchedValue = event.target.search.value
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
        
        let filteredItems = result.results.filter(function(item){return item.name.toLowerCase().includes(searchedValue.toLowerCase() )})
        setItems(filteredItems); // the state (items) became the filtered data
    }
    return(
        <>
          <Form className="d-flex"  id="myform" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              required
              />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div className="cardcontainer">
        {items.length !==0 ? items.map(function(item){
            return(
              <>
                <CardComp image={item.images[0].baseUrl} title={item.name} price={item.price.value} showFavorites={true}/>
                </>
            )
        }
    ) : <h3>No search results</h3>}
        </div>
        </>
    )
}

export default Main;