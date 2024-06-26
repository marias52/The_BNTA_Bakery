import { useState } from "react";

const Cake = ({cake}) => {
    return (
        <>
          <h3> {cake.cakeName} </h3>
          <h4>Ingredients: </h4>
          <ul>
            {cake.ingredients.map((ingredients, index) => (
                <li key={index} > {ingredients} </li>
            ))}


          </ul>
         
        </>

    )

}


export default Cake;
