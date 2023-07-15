import React from 'react'

const Gallery = () => {
    const images = [
        "/public/images/buddha_box.jpg",
        "/public/images/bedroom.jpg",
        "/public/images/bedroom_dark.jpg",
        "/public/images/cat_tv.jpg",
        "/public/images/diningarea_xc_painting.jpg",
        "/public/images/kidds_bedroom.jpg",
        "/public/images/livibgroom_xc_paintings.jpg",
        "/public/images/pooja_room.jpg",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
      ]
      

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="text-xl mb-5 font-semibold">Projects by our <a href="https://www.cluemediator.com" target="_blank" className="text-blue-500 hover:underline" rel="noopener">Interior Designer</a></div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map((image, index) => (
          <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery