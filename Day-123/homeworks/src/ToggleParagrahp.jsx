import React, { useState, useEffect } from "react";

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Paragraph & Fetch Product</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>
      {isVisible && <p>This is a paragraph of text that can be toggled.</p>}
      <div>
        {product ? (
          <div>
            <h3>Fetched Product:</h3>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </div>
  );
}

export default ToggleParagraph;
