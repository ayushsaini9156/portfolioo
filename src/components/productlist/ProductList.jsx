import React from 'react';
import Product from '../product/Product'; // Adjust path based on actual file structure
import { products } from '../../data'; // Adjust path based on actual file structure and name
import "./productlist.css"; // Import productlist.css for styling

// Importing images (adjust paths as per your file structure)
import codeReviewImg from '../../img/code-reviewer.png';
import currImage from '../../img/currency-exchanger.png';
import passGenImage from '../../img/passGenerator.png';
import androidImage from '../../img/notes.png';

const ProductList = () => {
  // Function to get product image based on id
  const getProductImage = (productId) => {
    switch (productId) {
      case 1:
        return codeReviewImg;
      case 2:
        return currImage;
      case 3:
        return passGenImage;
      case 4:
        return androidImage;
      default:
        return null;
    }
  };

  return (
    <div className="product-list">
      <h2 className="pl-title">Projects</h2>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} img={getProductImage(product.id)} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
