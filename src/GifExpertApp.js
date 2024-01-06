import React,{ useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

  const [ categories, setCategories ] = useState(['breakind bad']);

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ol>
        {
          categories.map( cat => (
            /* Key no debe de ser el indice, no debe de repetirce */
            <GifGrid
              key={ cat }
              category={ cat }
            />
          ))
        }
      </ol>
    </>
  )
}