
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch']);  
// La funcion MAP devuelve un array de lo que se procesa en el callback
   const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories,]);


   }

   console.log('Se ejecuto el padre');
  return (
    <>
    <h2>Gif Expert App</h2>
    < AddCategory onNewCategory = {onAddCategory} />
    <hr/>

    <ol>
        {/* SI INICIALMENTE TENIA UNA CATEGORIA [ CAT1] ENTRA A GIFGRID SE ASIGNA SU KEY
        Y LUEGO se llama al componente gifgrd para que retorne un elemento REACT, PERO
        SI añado otra categoria[CAT1, CAT2], al ejecutarse este map se manda a llamar a
        gifgrid con su respectivo key, pero como en este no se realizo ningun cambio
         NO LO EJECUTA DE CERO SOLO LO LLAMA COMO ERA ANTERIORMENTE
         y una vez que entre el nuevo elemento de catgoria CAT2 ahi si ejecutara nuevamente 
         el coponente GIFGRID
        */}
        {categories.map((category) =>{
            return <GifGrid key ={category} category={category}/>
        })}
    </ol>
    
    </>
  )
}
