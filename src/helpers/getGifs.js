
export const getGifs = async ( category ) =>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=8&api_key=Os31VfzJqVaSP4U4BNtmXPMLMkbJ84lB`;
  const resp = await fetch( url );
  const { data,meta } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

return gifs
}
