import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category)=>{
    console.log("ejecuta useFetchs");

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)
    
    const getImages = async ()=>{
          const newImages = await getGifs(category);
          setImages(newImages);
          setLoading(false);
    }

  useEffect(()=>{
    getImages();
  }, [])
  
  // getGifs();
  
  console.log(images);

  return {
    images,
    loading
  }

}