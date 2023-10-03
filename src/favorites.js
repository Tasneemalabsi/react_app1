import { useState } from "react";
import CardComp from "./card"


function Favorites (){

    let stringedFavorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(stringedFavorites);
    let [favoritesState, setFavoritesState] = useState(favorites)

    function handleDelete (index) {

        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        setFavoritesState(favoritesCopy)
        let storedData = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", storedData)
      }


    return(
        <>
        <div className="cardcontainer">
    {favoritesState.length !==0 ? favoritesState.map(function(item, index){
            return(
              <>
                <CardComp image={item.image} title={item.title} price={item.price} showFavorites={false} index = {index} 
                handleDelete={()=>{handleDelete(index)}}/>
                </>
            )
        }
    ) : <h3>No search results</h3>}
    </div>
        </>
    )
}

export default Favorites