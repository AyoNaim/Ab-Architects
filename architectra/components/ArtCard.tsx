'use client'
import React, { useState, useEffect } from 'react';

type ArtCardProps = {
  img: string;
  blurimg: string;
  text?: string;
  className?: string;
};

const ArtCard = ({ img, blurimg, className }: ArtCardProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false)
  }
  useEffect(() => {
    const imgLoader = new Image();
    imgLoader.src = img;
    imgLoader.addEventListener('load', handleLoad)
  }, [img]);

  // loaded ? 'bg-img-1' : 'bg-img-blur-1'
  return (
    <div
      className={`relative bg-cover bg-center w-56 h-64 md:w-64 md:h-72 border border-black`}
      style={{
        backgroundImage: `url(${loading ? blurimg : img })`,
      }}
    >
      {/* <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 text-sm">
        {loading ? 'Loading...' : 'High Res'}
      </div> */}
    </div>
  );
};

export default ArtCard;



// 'use client'
// import React, {useState, useRef, useEffect} from 'react'

// type ArtCard = {
//     img: string,
//     blurimg: string,
//     text: string,
//     className?: string
// }

// const ArtCard = ({className}: ArtCard) => {
//   const [loaded, setloaded] = useState<boolean>(false);
//   const imgRef = useRef<HTMLDivElement>(null);
//   const handleLoad = () => { setloaded(true)}
//   useEffect(() => {
//     const imgCurrent = imgRef.current;
//     if(imgCurrent) {
//       imgCurrent.addEventListener('load', handleLoad);
//       return (() => imgCurrent.removeEventListener('load', handleLoad))
//     }
//   }, [imgRef])
  
//   return (
//     <div ref={imgRef} className={`${className} ${loaded ? 'bg-img-1' : 'bg-img-blur-1'} bg-cover w-56 h-64 md:w-64 md:h-72 border border-black border-2`}>

//     </div>
//   )
// }

// export default ArtCard