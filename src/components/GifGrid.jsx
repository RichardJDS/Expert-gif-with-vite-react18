import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// console.log("Se ejecuto fuera de Escope gifgrid"); SOLO SE EJECUTA UNA VEZ
// POR MAs que se vuelva a renderizar nuevamente o se envie un nuevo props

export const GifGrid = ({category}) => {
  console.log("Se ejecuto gifgrid")
  
  const {images, loading} = useFetchGifs(category);

  const [count, setCount] = useState(0);
  // Cuando se realiza la ejecucion de una funcion PARA CCAMBIAR EL ESTADO DEL HOOK
  // SOLO se ejecute el componente donde se encuentra ese HOOK, no afecta AL COMPONENTE
  // PADRE NO AL COMPONENTE PADRE, puede ejecutar otro compoente si tiene adentro otro componente
  // pero el hijo no ejecuta al padre


  return (
    <div>
        <button onClick={()=>setCount()}>+1</button>
        {loading && <p>Cargando.....</p>}
        <h3>{category}</h3>
        <ol>
          {
            images.map((img)=>{
            return (<GifItem key={img.id} img = {img}/>);
            } )
          }
        </ol>

    </div>
  )
}
