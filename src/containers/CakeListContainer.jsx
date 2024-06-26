import Cake from "../components/Cake";
import {useState} from "react";

const CakeListContainer = () => {
        const [cakes, setCakes] = useState([
          {
            cakeName: "Victoria Sponge",
            ingredients: [
              "eggs",
              "chocolate", // test for dynamically adding ingrei
              "butter",
              "sugar",
              "self-raising flour",
              "baking powder",
              "milk"
            ],
            price: 5,
            rating: 5
          },
          {
            cakeName: "Tea Loaf",
            ingredients: [
              "eggs",
              "oil",
              "dried fruit",
              "sugar",
              "self-raising flour",
              "strong tea",
            ],
            price: 2,
            rating: 3
          },
          {
            cakeName: "Carrot Cake",
            ingredients: [
              "carrots",
              "walnuts",
              "oil",
              "cream cheese",
              "flour",
              "sugar",
            ],
            price: 8,
            rating: 5
          }
        ]);

    return (
        <>
            <h2> Cakes we sell: </h2>

            {cakes.map(( cake, index) => (
                <Cake
                key={index}
                cake={cake} 
                /> 


            ))}
        </>
    )

    // const cake = ({onButtonClick}) => {
    //     const handleAddCake = () => {
    //         console.log("you clicked add on " + title);
    //         onButtonClick(count);
    //     }
    // }
}


    export default CakeListContainer;

