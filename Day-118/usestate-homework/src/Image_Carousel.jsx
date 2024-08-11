import React, { useState } from 'react';

function ImageCarousel() {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; //fotos damateba mezareba ;DD
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[index]} alt="fotoebiararis" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageCarousel
