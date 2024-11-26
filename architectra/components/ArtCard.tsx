import React from 'react'

type ArtCard = {
    img: string,
    text: string,
    className?: string
}

const ArtCard = ({img, text, className}: ArtCard) => {
  return (
    <div className={`${className} w-56 h-64 bg-red-600`}>

    </div>
  )
}

export default ArtCard