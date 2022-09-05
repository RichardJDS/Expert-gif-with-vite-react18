export const getGifs = async ( category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zeQ3rD0zNPcA918L0iefw2byjQUE7VKM`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
      return {
        id:img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });


    return gifs;
    // console.log(gifs);
    // console.log(images);

  }